# 06 - Blueprint Visual Completo

## Template de um Item Generico do Catalogo

### CENA 1 — Title Card (~2-3s)
```
+--------------------------------------------------+
|                                                  |
|                                                  |
|            [CUTOUT_PNG]                          |
|              do item                             |
|                 sem fundo                        |
|                                                  |
|                    [NOME_DO_ITEM]                |
|                      rotacionado ~15°            |
|                      fonte manuscrita preta      |
|                      ALL CAPS                    |
|                                                  |
+--------------------------------------------------+
Background: #FFFFFF
Animacao: cutout scale-in + texto aparece rotacionado
Saida: shrink/morph para badge no canto
```

### CENA 2 — B-Roll Principal (~2-3s cada, repetir 3-8x)
```
+--------------------------------------------------+
| [BADGE]                                          |
| [icon][NOME]                                     |
|                                                  |
|           +-------------------+                  |
|           |                   |                  |
|           |  [FOTO/VIDEO]     |                  |
|           |  cantos           |                  |
|           |  arredondados     |                  |
|           |                   |                  |
|           +-------------------+                  |
|                                                  |
+--------------------------------------------------+
Background: #FFFFFF
Badge: top-left, persistente
Imagem: centralizada, scale-in na entrada
Variações: retrato (vertical), paisagem, quadrado
```

### CENA 3 — Dados/Apresentacao (opcional, ~4-6s)
```
+--------------------------------------------------+
| [BADGE]                                          |
|                                                  |
|        +------------+                            |
|        |[TITULO]    |     /‾‾\                   |
|        |[dado 1]    |    | ☻  |                  |
|        |[dado 2]    |    |/  \|                   |
|        |[dado 3]    |    | /\ |                  |
|        +-----+------+   /    \                   |
|              |          pessoa                    |
|              |          silhueta                  |
+--------------------------------------------------+
Background: #FFFFFF
Titulo no quadro: vermelho, ALL CAPS
Dados: preto, aparecem incrementalmente
Silhueta: preta, ao lado do quadro
```

### CENA 4 — Contexto/Historia (opcional, ~3-5s)
```
+--------------------------------------------------+
| [BADGE]                                          |
|                                                  |
|   +-----------+      +-----------+               |
|   |           |      |           |               |
|   |  [FOTO    |      |  [FOTO    |               |
|   |  HISTORICA]|      |  ATUAL]   |               |
|   |           |      |           |               |
|   +-----------+      +-----------+               |
|                                                  |
+--------------------------------------------------+
Variacao: pode ter mapa, ilustracao, ou silhueta + foto
```

### CENA 5 — Comparacao (opcional, ~4-5s)
```
+--------------------------------------------------+
| [BADGE]                                          |
|                                                  |
|  +-----------+  [TEXTO]   +-----------+          |
|  |           |  CRISPIER  |           |          |
|  |  [FOTO A] |    >       |  [FOTO B] |          |
|  |           |            |           |          |
|  +-----------+            +-----------+          |
|                                                  |
+--------------------------------------------------+
Texto comparativo: manuscrito, preto, entre as imagens
Simbolo ">": grande, central
```

### CENA 6 — B-Roll de Impacto/Fechamento (~2-3s cada, 2-4x)
```
Mesma estrutura da CENA 2, mas com fotos de:
- Produto final (pizza pronta, close-up)
- Cheese pull / fatia sendo puxada
- Alguem comendo
Ritmo mais rapido, cortes secos
```

### TRANSICAO PARA PROXIMO ITEM
```
[Fade para branco ~0.5s] → [Novo Title Card]
```

---

## Checklist de Producao por Item

### Assets Obrigatorios
- [ ] 1x Cutout PNG do item (sem fundo, alta qualidade)
- [ ] 1x Icone circular para o badge (~64x64px)
- [ ] Nome do item definido (ALL CAPS)
- [ ] 5-10x Fotos/clips de B-roll (cantos arredondados)
  - [ ] Pelo menos 1 foto do produto final
  - [ ] Pelo menos 1 foto/clip de preparo
  - [ ] Pelo menos 1 close-up apetitoso

### Assets Opcionais (mas recomendados)
- [ ] 1-2x Fotos historicas/de contexto
- [ ] 1x Silhueta vetorial para cena de dados
- [ ] Texto de dados/curiosidades (2-5 bullet points)
- [ ] 1x Mapa se relevante (origem geografica)
- [ ] Fotos para comparacao lado-a-lado

### Configuracao Visual
- [ ] Background: branco puro (#FFFFFF)
- [ ] Cantos arredondados em todas as imagens (~12-16px)
- [ ] Badge posicionado em top-left (x:5%, y:5%)
- [ ] Fonte manuscrita consistente em todos os textos
- [ ] Cor do badge: azul-marinho (#1A365D)

### Timeline por Item (template)
| Segmento | Duracao | Conteudo |
|----------|---------|----------|
| Title card | 2-3s | Cutout + nome rotacionado |
| Morph para badge | 0.5-1s | Animacao title→badge |
| B-roll intro | 4-8s | 2-3 fotos/clips (2-3s cada) |
| Dados/historia | 4-8s | Quadro + silhueta OU fotos contextuais |
| B-roll impacto | 4-6s | 2-3 fotos de close-up/food porn |
| Fade out | 0.5s | Dissolve para branco |
| **TOTAL** | **~15-30s** | |

---

## Regras que NUNCA Mudam

1. **Background sempre branco** — sem excecoes
2. **Badge sempre no canto superior esquerdo** — sempre presente durante o item
3. **Fonte sempre manuscrita/marker** — nunca fontes serifadas ou sans-serif
4. **Cantos arredondados em toda imagem** — nunca cantos retos
5. **Title card como abertura de cada item** — sempre com cutout PNG + nome rotacionado
6. **Corte seco como transicao padrao entre B-rolls** — nada elaborado
7. **Fade branco entre itens do catalogo** — separador universal
8. **Hierarquia visual**: badge < imagem central < title card (em tamanho)

## Partes que Variam

1. **Numero de fotos/clips** por item (5-10, depende do conteudo)
2. **Tipos de cena opcionais** (dados, comparacao, mapa — nem todo item tem)
3. **Orientacao das fotos** (vertical, horizontal, quadrado — mix livre)
4. **Duracao total do item** (15-35s, itens mais importantes ficam mais longos)
5. **Cor do icone do badge** (muda para refletir o item)
6. **Presenca ou nao de silhuetas** (depende se ha dados para apresentar)
7. **Quantidade de texto na tela** (alguns itens sao mais visuais, outros mais informativos)

---

## Resumo em Uma Frase

> Fundo branco + badge persistente no canto + imagens com cantos arredondados + fonte manuscrita + title card com cutout PNG rotacionado = formula visual deste formato de catalogo.
