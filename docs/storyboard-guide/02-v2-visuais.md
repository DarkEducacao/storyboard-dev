# V2 — Storyboard com Visuais SVG

Tudo que o V1 tem (cards de texto) + uma ilustracao esquematica SVG por beat mostrando a composicao do frame.

---

## O Que os SVGs Representam

Os SVGs NAO sao ilustracoes artisticas. Sao **diagramas de composicao** — wireframes do frame final mostrando:

| Elemento no SVG | O que representa | Como aparece |
|---|---|---|
| Retangulo azul-marinho no top-left | Badge do item | Pill com texto branco |
| Retangulo cinza com cantos arredondados | Area da imagem/B-roll | Placeholder com label "FOTO: [descricao]" |
| Bloco de texto preto | Texto overlay que aparece na tela | Posicionado onde apareceria no frame |
| Retangulo com borda fina | Quadro de apresentacao | Com linhas de texto dentro |
| Silhueta geometrica | Figura humana (silhueta) | Forma simplificada |
| Setas | Direcao de camera ou movimento | Indicam zoom, slide, pan |
| Fundo | Background | Branco puro (#FFF) — como no video |

### O SVG segue as regras de composicao de `docs/analysis/01-composicao-visual.md`:
- Badge sempre em `x:5%, y:5%`, ~20% largura
- Imagem principal centralizada, 40-60% da tela
- Margens: 8-12% lateral, 15% topo (abaixo do badge), 8% inferior
- Cantos arredondados em toda imagem: rx="12"
- Paleta: fundo branco, badge azul-marinho (#1A365D), textos preto, destaques vermelho (#E53E3E)

---

## Abordagem Recomendada: V1 Primeiro, Depois Visuais

A forma mais eficiente NAO e gerar V2 do zero. E:

```
PASSO 1: Gera V1 do item (cards de texto)
         → Valida estrutura, timing, transicoes
         → Ajusta o que precisa

PASSO 2: Pede "agora adiciona os visuais SVG" no mesmo componente
         → Claude Code adiciona SVGs aos cards ja validados
         → Estrutura nao muda — so ganha camada visual
```

Isso economiza tokens porque:
- Se a estrutura precisa de ajuste, voce ajusta no V1 (barato)
- Os SVGs so sao gerados quando a estrutura esta certa (evita desperdicio)
- O prompt de "adicionar visuais" e menor que gerar tudo do zero

---

## Prompt Base — Gerar V2 de Um Item (do zero)

Use este prompt se voce quer gerar V2 direto, sem passar pelo V1:

```
Leia o roteiro estruturado em scripts/coffee-types.md.
Leia os padroes visuais em docs/analysis/01-composicao-visual.md.

Gere o storyboard V2 (diagramatico + visuais SVG) para o item 
[ITEM_NUMERO] — [NOME_DO_ITEM].

Para cada beat, gere:

1. CARD DE TEXTO (igual ao V1):
   - Numero, tipo, narracao, direcao visual, camera, timing, assets

2. SVG DE COMPOSICAO (854x480, viewBox proporcional ao video):
   - Badge pill azul-marinho (#1A365D) no top-left
   - Area de imagem como retangulo cinza (#E2E8F0) com cantos 
     arredondados (rx="12") e label descritivo
   - Textos overlay posicionados onde apareceriam no frame
   - Silhuetas como formas geometricas simplificadas quando aplicavel
   - Setas indicando direcao de camera (← → ↑ ↓ ou ⟳ pra zoom)
   - Paleta: fundo #FFF, badge #1A365D, texto #000, destaque #E53E3E

O SVG deve ser INLINE no componente React — nao arquivo separado.
Gere em: src/components/storyboard/[NOME_SLUG]-v2.tsx

Fidelidade media: formas geometricas e blocos de cor, nao 
ilustracoes detalhadas. O objetivo e mostrar COMPOSICAO, nao arte.
```

---

## Prompt — Adicionar Visuais a um V1 Existente

Este e o prompt mais EFICIENTE. Use quando ja tem V1 validado:

```
O storyboard V1 do item [NOME_DO_ITEM] ja esta gerado e validado em 
src/components/storyboard/[NOME_SLUG].tsx.

Adiciona SVGs de composicao a cada card, transformando em V2.

Para cada beat, adiciona um SVG inline (854x480) mostrando:
- Badge pill no top-left (#1A365D)
- Areas de imagem como retangulos cinza com cantos arredondados 
  e label descritivo
- Textos overlay posicionados
- Setas de direcao de camera quando relevante

Segue os padroes de docs/analysis/01-composicao-visual.md.

Nao altera a estrutura dos cards — so adiciona os SVGs.
Salva no mesmo arquivo, substituindo a versao anterior.
```

---

## Exemplo Completo: Item #5 — Kopi Luwak

Kopi Luwak e o melhor exemplo pra V2 porque tem a maior variedade de composicoes: title card, B-roll, dados, pivot dramatico, comparacao, closer seco.

### Beat 1 — Dupla tensao como abertura (SVG)

```svg
<svg viewBox="0 0 854 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="854" height="480" fill="#FFFFFF"/>
  
  <!-- Cutout PNG placeholder (centralizado) -->
  <rect x="302" y="80" width="250" height="280" rx="16" 
        fill="#E2E8F0" stroke="#CBD5E0" stroke-width="1"/>
  <text x="427" y="220" text-anchor="middle" 
        font-size="14" fill="#718096">CUTOUT PNG</text>
  <text x="427" y="240" text-anchor="middle" 
        font-size="11" fill="#A0AEC0">grao de cafe ou civeta</text>
  
  <!-- Nome rotacionado -->
  <text x="520" y="380" 
        transform="rotate(-15, 520, 380)"
        font-size="32" font-weight="bold" fill="#000"
        font-family="sans-serif">KOPI LUWAK</text>
</svg>
```

**Card**: Title card. Cutout centralizado, nome rotacionado -15 graus. Sem badge ainda — o badge aparece apos a transicao title→badge.

### Beat 4 — Pivot retorico explicito (SVG)

```svg
<svg viewBox="0 0 854 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Background levemente escurecido -->
  <rect width="854" height="480" fill="#F7F7F7"/>
  
  <!-- Badge -->
  <rect x="20" y="15" width="180" height="36" rx="18" fill="#1A365D"/>
  <circle cx="38" cy="33" r="14" fill="#2D3748"/>
  <text x="115" y="38" text-anchor="middle" 
        font-size="13" fill="white" font-weight="bold">KOPI LUWAK</text>
  
  <!-- Texto central dramatico -->
  <text x="427" y="250" text-anchor="middle" 
        font-size="36" font-weight="bold" fill="#000"
        font-family="sans-serif">"But here's the</text>
  <text x="427" y="295" text-anchor="middle" 
        font-size="36" font-weight="bold" fill="#E53E3E"
        font-family="sans-serif">dark side."</text>
  
  <!-- Nota: fundo levemente diferente indica mudanca de tom -->
</svg>
```

**Card**: Tela quase vazia. Fundo levemente mais escuro (#F7F7F7 em vez de #FFF). Texto grande e centralizado. "dark side" em vermelho. O SVG comunica: este frame e DIFERENTE de tudo antes. O editor entende imediatamente que precisa de pausa e mudanca de tom.

### Beat 6 — Desmonte completo + punchline (SVG)

```svg
<svg viewBox="0 0 854 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="854" height="480" fill="#FFFFFF"/>
  
  <!-- Badge -->
  <rect x="20" y="15" width="180" height="36" rx="18" fill="#1A365D"/>
  <circle cx="38" cy="33" r="14" fill="#2D3748"/>
  <text x="115" y="38" text-anchor="middle" 
        font-size="13" fill="white" font-weight="bold">KOPI LUWAK</text>
  
  <!-- Comparacao: duas xicaras identicas -->
  <rect x="160" y="100" width="200" height="160" rx="12" 
        fill="#E2E8F0" stroke="#CBD5E0"/>
  <text x="260" y="175" text-anchor="middle" 
        font-size="12" fill="#718096">KOPI LUWAK</text>
  <text x="260" y="195" text-anchor="middle" 
        font-size="12" fill="#718096">$700/kg</text>
  
  <text x="427" y="190" text-anchor="middle" 
        font-size="28" font-weight="bold" fill="#000">?</text>
  
  <rect x="494" y="100" width="200" height="160" rx="12" 
        fill="#E2E8F0" stroke="#CBD5E0"/>
  <text x="594" y="175" text-anchor="middle" 
        font-size="12" fill="#718096">SPECIALTY</text>
  <text x="594" y="195" text-anchor="middle" 
        font-size="12" fill="#718096">COFFEE</text>
  
  <!-- Punchline -->
  <text x="427" y="360" text-anchor="middle" 
        font-size="20" font-weight="bold" fill="#000"
        font-family="sans-serif">PAYING FOR THE STORY,</text>
  <text x="427" y="390" text-anchor="middle" 
        font-size="20" font-weight="bold" fill="#E53E3E"
        font-family="sans-serif">NOT THE TASTE.</text>
</svg>
```

**Card**: Layout comparativo. Duas xicaras identicas com "?" entre elas (teste cego). Punchline na parte inferior em vermelho.

---

## Quando Detalhar Mais vs Menos o SVG

### Mais detalhe (gastar mais no SVG):
- **Beats comparativos** — o posicionamento lado-a-lado precisa ser claro
- **Beats com dados/infograficos** — o editor precisa saber onde cada numero fica
- **Beats de pivot/micro-beat** — a diferenca visual em relacao aos demais precisa ser obvia
- **Title cards** — a composicao e unica (cutout + texto rotacionado)

### Menos detalhe (SVG minimo):
- **Beats de B-roll simples** — e so "badge + imagem centralizada", o SVG e quase igual em todos
- **Beats sequenciais de mesmo tipo** — se 3 beats consecutivos sao B-roll, o SVG e identico mudando so o label
- **Closers com texto** — muitas vezes e so texto na tela

**Regra pratica**: se dois beats consecutivos teriam SVGs visivelmente identicos, simplifique o segundo com uma nota "mesma composicao do beat anterior, troca a imagem".

---

## Dicas de Iteracao

### Ajustar composicao de um beat especifico

```
No storyboard V2 do Kopi Luwak:

Beat 6 — move a punchline pra posicao central (y:240) 
em vez de inferior (y:360). Quero que fique mais 
proeminente. Ajusta so o SVG desse beat.
```

### Pedir SVG mais detalhado pra um beat especifico

```
No storyboard V2 do Kopi Luwak:

Beat 4 (pivot "dark side") — o SVG ta muito simples.
Adiciona uma sombra gradiente no fundo (de branco pra 
cinza sutil) pra comunicar a mudanca de tom. Ajusta 
so esse SVG.
```

### Padronizar SVGs entre itens

```
Ja gerei V2 pro Espresso e pro Turkish Coffee.
Agora gere V2 pro Cold Brew mantendo o mesmo estilo 
de SVG: mesma espessura de borda, mesmos tons de cinza,
mesmas proporcoes de badge. Consistencia visual.
```

---

## ECONOMIA DE TOKENS — REGRAS DE OURO

1. **Nunca gere o storyboard inteiro de uma vez.** Gere item por item. Um catalogo de 8 itens = 8 geracoes, nao 1.

2. **Valide a estrutura (V1) antes de adicionar visuais (V2/V3).** Se o beat 3 esta no lugar errado, e mais barato mover no V1 do que regenerar V2 com SVGs novos.

3. **Peca ajustes cirurgicos.** "No beat 4 do Kopi Luwak, adiciona gradiente no fundo do SVG" e 10x mais barato que "refaz o item 5 inteiro".

4. **Use o roteiro .md como source of truth.** Se mudar algo no roteiro, regenera so o item afetado no storyboard — nao todos.

5. **Pra catalogos grandes (20+ itens), gere em blocos de 5 itens.** Isso mantem o contexto sem estourar a janela. Valide cada bloco antes de ir pro proximo.
