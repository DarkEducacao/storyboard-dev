# 03 - Ritmo de Edicao

## Cortes Detectados (threshold scene > 0.3)

Estes sao os cortes MAIORES — mudancas bruscas de cena detectadas pelo ffmpeg.

| # | Timestamp | Tempo formatado | Intervalo desde anterior |
|---|-----------|----------------|-------------------------|
| 1 | 1.67s | 0:01 | — (inicio) |
| 2 | 6.70s | 0:06 | 5.0s |
| 3 | 17.30s | 0:17 | 10.6s |
| 4 | 26.40s | 0:26 | 9.1s |
| 5 | 30.80s | 0:30 | 4.4s |
| 6 | 36.60s | 0:36 | 5.8s |
| 7 | 49.20s | 0:49 | 12.6s |
| 8 | 61.73s | 1:01 | 12.5s |
| 9 | 83.00s | 1:23 | 21.3s |
| 10 | 88.23s | 1:28 | 5.2s |
| 11 | 121.03s | 2:01 | 32.8s |
| 12 | 124.67s | 2:04 | 3.6s |

**Total de cortes maiores**: 12 em 182 segundos
**Intervalo medio entre cortes maiores**: ~11.2 segundos

## Micro-Cortes (B-Roll interno)

Analisando os frames every-2s, ha mudancas de imagem/B-roll a cada **2-4 segundos** DENTRO de cada secao. Esses micro-cortes nao sao detectados pelo threshold 0.3 porque:
- O badge permanece fixo (continuidade visual no canto)
- O fundo branco permanece (nao ha mudanca drastica de histograma)
- Apenas a imagem central muda

**Estimativa de ritmo real de B-roll**: troca de visual a cada ~2-4 segundos

## Padrao de Ritmo

### Fase 1 — Abertura do Item (rapida)
- Title card: ~2-3 segundos
- Transicao para badge: ~1 segundo
- Primeiras imagens: ritmo acelerado, 2-3s cada

### Fase 2 — Desenvolvimento (moderada)
- Imagens contextuais (historia, origem): ~3-5s cada
- Cenas de dados/apresentacao: ~4-6s (texto precisa ser lido)
- Comparacoes lado-a-lado: ~4-5s

### Fase 3 — B-Roll de Impacto (rapida)
- Fotos/videos de preparo e produto final: ~2-3s cada
- Ritmo mais rapido, visualmente estimulante

### Fase 4 — Transicao para Proximo Item
- Possivel fade/dissolve para branco: ~0.5-1s
- Novo title card aparece

## Duracao Estimada por Item do Catalogo

Baseado nos cortes maiores e badges observados:

| Item | Inicio aprox. | Fim aprox. | Duracao |
|------|-------------|-----------|---------|
| Neapolitan Pizza | 0:00 | ~0:36 | ~36s |
| New York Style | ~0:36 | ~1:01 | ~25s |
| Roman Pizza | ~1:01 | ~1:23 | ~22s |
| Chicago Deep Dish | ~1:23 | ~1:50 | ~27s |
| Colorado Style | ~1:50 | ~2:04 | ~14s |
| Turkish Pizza | ~2:04 | ~2:20 | ~16s |
| Paneer Tikka | ~2:20 | ~2:50 | ~30s |
| Detroit Style | ~2:50 | ~3:02 | ~12s |

**Observacao**: O primeiro item (Neapolitan) recebe mais tempo (~36s) — provavelmente por ser o "fundador" do catalogo e estabelecer o formato. Itens subsequentes ficam mais curtos.

## Correlacao Conteudo vs Ritmo

| Tipo de Conteudo | Ritmo de Corte | Motivo |
|---|---|---|
| Title card + abertura | Rapido (2-3s) | Capturar atencao, estabelecer tema |
| Historia/origem | Moderado (3-5s) | Fotos historicas precisam de tempo |
| Dados/regras (quadro) | Lento (4-6s) | Texto precisa ser lido pelo espectador |
| Comparacao visual | Moderado (4-5s) | Espectador precisa processar ambas imagens |
| B-roll de comida | Rapido (2-3s) | Food porn visual, estimulo rapido |
| Preparo/processo | Moderado (3-4s) | Mostrar acao sendo executada |

## Conclusao sobre Ritmo
- O video mantem um ritmo **predominantemente rapido** (~3s por visual em media)
- Nunca ha uma tomada que dure mais de ~6 segundos
- A sensacao e de "catalogo visual dinamico" — muitos visuais em pouco tempo
- O badge fixo no canto cria CONTINUIDADE mesmo com cortes rapidos
- O espectador nunca perde o contexto de "qual pizza estamos vendo" gracas ao badge
