"""Transforma um roteiro (texto) em narração .mp3 usando a API do Fish Audio.

Uso:
    python narration/tts.py roteiro.txt --voice ID_DA_VOZ --out narracao.mp3
    echo "Olá mundo" | python narration/tts.py - --voice ID_DA_VOZ

A chave é lida da variável de ambiente FISH_API_KEY.
"""

import argparse
import json
import os
import sys
import urllib.error
import urllib.request

API_URL = "https://api.fish.audio/v1/tts"


def synthesize(text, voice_id, api_key, model="s2-pro", bitrate=192):
    body = {
        "text": text,
        "reference_id": voice_id,
        "format": "mp3",
        "mp3_bitrate": bitrate,
        "normalize": True,
    }
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(body).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "model": model,
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=300) as resp:
            return resp.read()
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", errors="replace")
        sys.exit(f"Erro da API Fish Audio ({e.code}): {detail}")
    except urllib.error.URLError as e:
        sys.exit(f"Não foi possível conectar ao Fish Audio: {e.reason}")


def main():
    parser = argparse.ArgumentParser(description="Roteiro -> narração .mp3 (Fish Audio)")
    parser.add_argument("input", help="arquivo .txt com o roteiro, ou '-' para ler da entrada padrão")
    parser.add_argument("--voice", required=True, help="ID da voz no Fish Audio (reference_id)")
    parser.add_argument("--out", default="narracao.mp3", help="arquivo de saída (padrão: narracao.mp3)")
    parser.add_argument("--model", default="s2-pro", help="modelo do Fish Audio (padrão: s2-pro)")
    args = parser.parse_args()

    api_key = os.environ.get("FISH_API_KEY")
    if not api_key:
        sys.exit("Defina a variável de ambiente FISH_API_KEY com sua chave do Fish Audio.")

    if args.input == "-":
        text = sys.stdin.read()
    else:
        with open(args.input, encoding="utf-8") as f:
            text = f.read()
    text = text.strip()
    if not text:
        sys.exit("O roteiro está vazio.")

    audio = synthesize(text, args.voice, api_key, model=args.model)
    with open(args.out, "wb") as f:
        f.write(audio)
    print(f"Narração salva em {args.out} ({len(audio) / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
