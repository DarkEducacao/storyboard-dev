# Analise Visual — "Every Type of Pizza Explained"

Analise frame-a-frame do video de referencia `videos/pizza-types-reference.mp4`.

**Video**: ~182 segundos (3:02), 854x480, H.264 30fps
**Itens catalogados no video**: Neapolitan Pizza, New York Style, Roman Pizza, Chicago Deep Dish, Colorado Style, Turkish Pizza, Paneer Tikka, Detroit Style

---

## Frames Extraidos

### Frames a cada 2 segundos
- **Diretorio**: `docs/frames/every-2s/`
- **Quantidade**: 91 frames
- **Nomenclatura**: `frame-0001.jpg` a `frame-0091.jpg`
- **Cobertura**: 1 frame a cada 2 segundos do video inteiro

### Frames de Corte (mudancas de cena)
- **Diretorio**: `docs/frames/cuts/`
- **Quantidade**: 12 cortes detectados (threshold scene > 0.3)
- **Nomenclatura**: `cut-MMmSSs.jpg` (ex: `cut-00m06s.jpg`)
- **Arquivo auxiliar**: `showinfo-log.txt` (log bruto do ffmpeg) e `timestamps.txt`

#### Lista de Cortes Detectados
| Arquivo | Timestamp | Descricao |
|---------|-----------|-----------|
| `cut-00m01s.jpg` | 1.67s | Abertura — imagem de pizza em forno |
| `cut-00m06s.jpg` | 6.70s | Badge "Neapolitan Pizza" aparece |
| `cut-00m17s.jpg` | 17.30s | B-roll Neapolitan — pizza Ooni |
| `cut-00m26s.jpg` | 26.40s | B-roll — fatia de pizza na mao |
| `cut-00m30s.jpg` | 30.80s | Silhueta + quadro de apresentacao |
| `cut-00m36s.jpg` | 36.60s | Lombardi's — fachada do restaurante |
| `cut-00m49s.jpg` | 49.20s | New York Style — pessoa na rua |
| `cut-01m01s.jpg` | 61.73s | Transicao branca (fade entre secoes) |
| `cut-01m23s.jpg` | 83.00s | Transicao branca |
| `cut-01m28s.jpg` | 88.23s | Chicago Deep Dish — preparo massa |
| `cut-02m01s.jpg` | 121.03s | Transicao branca |
| `cut-02m04s.jpg` | 124.67s | Turkish Pizza — massa sendo aberta |

---

## Documentos de Analise

| # | Documento | Conteudo |
|---|-----------|----------|
| 01 | [Composicao Visual](01-composicao-visual.md) | Layout por tipo de cena, posicao de elementos, paleta de cores, safe zones, uso de espaco negativo |
| 02 | [Tipografia e Overlays](02-tipografia-e-overlays.md) | Fontes, hierarquia visual, badges, baloes, padroes de entrada/saida de texto |
| 03 | [Ritmo de Edicao](03-ritmo-de-edicao.md) | Intervalos entre cortes, duracao por item, correlacao conteudo/ritmo, padrao de aceleracao |
| 04 | [Transicoes e Movimento](04-transicoes-e-movimento.md) | Tipos de transicao, frequencia, sequencia completa title→badge, movimento de elementos |
| 05 | [Assets e Recursos](05-assets-e-recursos.md) | Tipos de imagem, overlays recorrentes, estimativa de assets por item, fontes provaveis |
| 06 | [Blueprint Visual Completo](06-blueprint-visual-completo.md) | Template reproduzivel com placeholders, checklist de producao, regras fixas vs variaveis |

| 07 | [Estrutura Narrativa do Roteiro](07-estrutura-narrativa-roteiro.md) | Beats por item, assimetrias, micro-beats, padroes recorrentes, moldura narrativa |

---

## Roteiro Estruturado

| Arquivo | Conteudo |
|---------|----------|
| [coffee-types.md](../../scripts/coffee-types.md) | Roteiro completo com beats, visuais, assets e notas de edicao |
| [coffee-types-summary.md](../structured-data/coffee-types-summary.md) | Resumo de producao com inventario de assets |
| [catalog-script-guide.md](../templates/catalog-script-guide.md) | Guia adaptavel para converter qualquer roteiro de catalogo |

---

## Guia de Storyboard

| # | Documento | Conteudo |
|---|-----------|----------|
| 00 | [Como Escolher](../storyboard-guide/00-como-escolher.md) | Guia de decisao: V1 vs V2 vs V3, fluxograma, comparacao de custo |
| 01 | [V1 — Diagramatico](../storyboard-guide/01-v1-diagramatico.md) | Prompts, exemplo Turkish Coffee, dicas de iteracao |
| 02 | [V2 — Visuais SVG](../storyboard-guide/02-v2-visuais.md) | Prompts, exemplo Kopi Luwak, SVGs de composicao |
| 03 | [V3 — Animado](../storyboard-guide/03-v3-animado.md) | Prompts, exemplo Espresso, mapa de animacoes CSS |

---

## Quick Reference — Formula Visual

```
Fundo branco
  + Badge (pill azul-marinho + icone) no top-left
  + Imagens com cantos arredondados, centralizadas
  + Fonte manuscrita/marker em todos os textos
  + Title card com cutout PNG + nome rotacionado
  + Corte seco entre B-rolls, fade branco entre itens
  + Silhuetas vetoriais para cenas de dados
  + Ritmo: ~2-4s por visual, ~15-30s por item
```
