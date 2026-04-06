# 01 - Composicao Visual

## Background Padrao
- **Cor**: Branco puro (#FFFFFF) em 100% das cenas
- Nenhuma textura, gradiente ou pattern de fundo em momento algum
- O branco funciona como "tela limpa" — todo elemento visual flutua sobre ele

## Layout por Tipo de Cena

### A) Title Card (abertura de cada item do catalogo)
- Imagem **cutout PNG** do alimento (recortada, sem fundo) centralizada na tela
- Texto do nome em fonte manuscrita, rotacionado ~15-20 graus, posicionado abaixo/ao lado do cutout
- Ocupa toda a tela por ~2-3 segundos
- Exemplo: fatia grande de pizza Neapolitan + "NEAPOLITAN PIZZA" em diagonal

### B) Cena de B-Roll (conteudo principal — mais frequente)
- **Badge do item**: canto superior esquerdo, sempre presente
- **Imagem/video principal**: centralizada ou levemente deslocada, com **cantos arredondados** (~12-16px radius)
- A imagem pode ser:
  - **Retrato/vertical** (estilo mobile/TikTok): centralizada, ~40% da largura da tela
  - **Paisagem/horizontal**: centralizada, ~50-60% da largura
  - **Quadrada**: centralizada, ~40-50% da largura
- Margens generosas: conteudo visual nunca encosta nas bordas (safe zone ~10% em cada lado)

### C) Cena Comparativa (lado a lado)
- Duas imagens com cantos arredondados, lado a lado
- Texto comparativo entre elas (ex: "CRISPIER >")
- Badge no canto superior esquerdo permanece
- Exemplo: frame-0042 — duas pizzas com "CRISPIER >" no centro

### D) Cena de Dados/Apresentacao (silhueta + quadro)
- **Silhueta preta** de pessoa apontando para um quadro/flip chart
- Quadro branco com borda fina onde textos aparecem incrementalmente
- Badge no canto superior esquerdo
- Silhueta posicionada a direita, quadro a esquerda/centro
- Exemplo: frame-0016/0017 — "STRICT RULES" no quadro

### E) Cena Ilustrativa (silhueta + imagem)
- Silhueta preta (busto ou corpo inteiro) + imagem contextual
- Silhueta tipicamente a esquerda ou centro-inferior
- Imagem a direita ou centro-superior
- Exemplo: frame-0022 — silhueta pensativa + foto de rua NYC

### F) Cena de Contexto Geografico
- Mapa (Americas ou mapa-mundi) + elementos visuais
- Badge no canto superior esquerdo
- Mapa com cantos arredondados, tons suaves (azul claro)
- Baloes de fala hand-drawn podem aparecer (ex: "PIZZA")

## Posicao dos Elementos Recorrentes

| Elemento | Posicao | Tamanho relativo |
|----------|---------|-----------------|
| Badge do item | Top-left (x:~5%, y:~5%) | ~20% largura, ~8% altura |
| Imagem principal | Centro | 40-60% da tela |
| Texto de dados | Centro-direita ou sobre quadro | Variavel |
| Silhueta | Centro-inferior ou lateral | ~30-40% altura |
| Texto comparativo | Entre imagens | ~15% largura |

## Paleta de Cores Dominante

| Tipo de Cena | Cores Dominantes |
|---|---|
| Background | Branco puro (#FFF) |
| Badge | Azul-marinho escuro / teal (#2C3E50 a #1A365D) |
| Texto badge | Branco |
| Texto conteudo | Preto (#000) |
| Texto destaque | Vermelho (#E53E3E) para palavras-chave |
| Silhuetas | Preto solido (#000) |
| Cantos de imagens | Shadow/borda suave |

## Espaco Negativo
- O branco e o elemento visual mais presente — ele respira
- Raramente mais de 2-3 elementos visuais na tela simultaneamente
- A composicao e esparsa de proposito: foco total no elemento atual
- Margens laterais: ~8-12% | Margem superior: ~15% (abaixo do badge) | Margem inferior: ~8%
