"""Front-end local de narração: cole o roteiro e baixe o .mp3.

Uso:
    python narration/app.py
    (abra http://localhost:8000 no navegador)

A chave é lida da variável de ambiente FISH_API_KEY ou do arquivo narration/.env
(linha FISH_API_KEY=sua-chave). Ela fica só no seu computador, nunca vai para o navegador.
"""

import json
import os
import sys
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from tts import TTSError, synthesize

HERE = Path(__file__).parent
PORT = int(os.environ.get("PORT", "8000"))


def load_api_key():
    key = os.environ.get("FISH_API_KEY")
    if key:
        return key.strip()
    env_file = HERE / ".env"
    if env_file.exists():
        for line in env_file.read_text(encoding="utf-8").splitlines():
            name, _, value = line.partition("=")
            if name.strip() == "FISH_API_KEY":
                return value.strip().strip('"').strip("'")
    return None


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path not in ("/", "/index.html"):
            self.send_error(404)
            return
        page = (HERE / "index.html").read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(page)))
        self.end_headers()
        self.wfile.write(page)

    def do_POST(self):
        if self.path != "/api/tts":
            self.send_error(404)
            return
        try:
            length = int(self.headers.get("Content-Length", 0))
            data = json.loads(self.rfile.read(length) or b"{}")
        except ValueError:
            return self.send_json(400, {"error": "Requisição inválida."})

        text = (data.get("text") or "").strip()
        voice = (data.get("voice") or "").strip()
        model = (data.get("model") or "s2-pro").strip()
        if not text:
            return self.send_json(400, {"error": "Cole um roteiro antes de gerar."})
        if not voice:
            return self.send_json(400, {"error": "Informe o ID da voz."})

        api_key = load_api_key()
        if not api_key:
            return self.send_json(500, {"error": "Chave não encontrada. Crie o arquivo narration/.env com FISH_API_KEY=sua-chave."})

        try:
            audio = synthesize(text, voice, api_key, model=model)
        except TTSError as e:
            return self.send_json(502, {"error": str(e)})

        self.send_response(200)
        self.send_header("Content-Type", "audio/mpeg")
        self.send_header("Content-Length", str(len(audio)))
        self.end_headers()
        self.wfile.write(audio)

    def send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        sys.stderr.write(f"[narração] {fmt % args}\n")


def main():
    if not load_api_key():
        print("Aviso: FISH_API_KEY não encontrada (variável de ambiente ou narration/.env).")
    url = f"http://localhost:{PORT}"
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"Narração rodando em {url}  (Ctrl+C para sair)")
    if "--no-browser" not in sys.argv:
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
