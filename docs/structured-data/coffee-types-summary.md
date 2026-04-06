# Coffee Types — Dados Estruturados (Resumo de Producao)

Referencia rapida para producao. Dados extraidos de `scripts/coffee-types.md`.

---

## Visao Geral

| Metrica | Valor |
|---------|-------|
| Total de itens | 8 |
| Total de beats | 52 |
| Total de palavras (narracao) | ~1215 |
| Duracao estimada (narracao) | ~8:06 (486s) |
| Hook | Nao |
| CTA | Nao |
| Bumps de retencao | Nao |
| Closer implicito | Sim (Pour Over referencia outros itens) |
| Opener implicito | Sim (Espresso como "base de tudo") |

---

## Beats por Item

| # | Item | Beats | Palavras | Duracao | Role |
|---|------|-------|----------|---------|------|
| 1 | Espresso | 6 | ~150 | ~60s | Opener fundacional |
| 2 | Turkish Coffee | 7 | ~160 | ~64s | Contraste: o mais antigo/ritual |
| 3 | Cold Brew | 6 | ~160 | ~64s | O moderno mainstream |
| 4 | Cappuccino | 6 | ~155 | ~62s | O classico mal-entendido |
| 5 | Kopi Luwak | 6 | ~150 | ~60s | O controverso (arco moral) |
| 6 | French Press | 6 | ~130 | ~52s | O honesto/funcional |
| 7 | Vietnamese Coffee | **8** | ~155 | ~62s | O mais rico narrativamente |
| 8 | Pour Over | 7 | ~155 | ~62s | Closer implicito |

---

## Inventario de Assets Necessarios

### Por categoria (estimativa total)

| Tipo de Asset | Quantidade |
|---------------|-----------|
| Cutout PNGs (title cards) | 8 |
| Icones circulares (badges) | 8 |
| Fotos/clips de B-roll | ~45-55 |
| Silhuetas vetoriais + quadro | ~6-8 |
| Infograficos/data-viz | ~8-10 |
| Layouts comparativos lado-a-lado | ~5 |
| Mapas | ~3 |
| Fotos historicas | ~5-6 |
| **TOTAL estimado** | **~90-105 assets** |

### Assets por item

| Item | Cutout | Icone | B-roll | Silhueta | Info | Comp | Mapa | Hist | Total |
|------|--------|-------|--------|----------|------|------|------|------|-------|
| Espresso | 1 | 1 | 6 | 1 | 1 | 0 | 0 | 1 | 11 |
| Turkish Coffee | 1 | 1 | 5 | 1 | 1 | 0 | 0 | 1 | 10 |
| Cold Brew | 1 | 1 | 4 | 1 | 2 | 1 | 0 | 1 | 11 |
| Cappuccino | 1 | 1 | 4 | 1 | 2 | 1 | 0 | 1 | 11 |
| Kopi Luwak | 1 | 1 | 5 | 0 | 1 | 1 | 0 | 0 | 9 |
| French Press | 1 | 1 | 4 | 1 | 0 | 1 | 0 | 0 | 8 |
| Vietnamese Coffee | 1 | 1 | 6 | 1 | 0 | 0 | 2 | 1 | 12 |
| Pour Over | 1 | 1 | 5 | 0 | 1 | 1 | 0 | 0 | 9 |

### Assets reutilizaveis (entre itens)
- Foto de espresso (usada em Espresso beat 6 E Pour Over beat 7)
- Foto de cold brew (usada em Cold Brew beats E Pour Over beat 7)
- Foto de french press na xicara (French Press beat 3 E Pour Over beat 6)

---

## Micro-Beats (momentos de alto impacto editorial)

Frases curtas que precisam de pausa visual e espaco editorial:

| Item | Frase | Posicao no item |
|------|-------|-----------------|
| Espresso | "He literally invented it out of impatience." | Beat 5, final |
| Turkish Coffee | "You drink the grounds." | Beat 2, final |
| Turkish Coffee | "It's the only coffee...that tells your future after you drink it." | Beat 7, closer |
| Cold Brew | "Just patience." | Beat 2, final |
| Cappuccino | "That's the rule." | Beat 1, final |
| Cappuccino | "It already works." | Beat 6, closer |
| Kopi Luwak | "But here's the dark side." | Beat 4, INTEIRO |
| Kopi Luwak | "You're paying for the story, not the taste." | Beat 6, closer |
| Vietnamese Coffee | "The Vietnamese turned that into an advantage." | Beat 5, INTEIRO |
| Pour Over | "Precision brewing." | Beat 1, final |

---

## Momentos Criticos de Edicao

1. **Kopi Luwak, Beat 4** ("But here's the dark side.") — Momento mais dramatico. Precisa de pausa visual de ~1s antes e depois. Possivel mudanca de iluminacao/tom na musica.

2. **Vietnamese Coffee, Beat 5** ("The Vietnamese turned that into an advantage.") — Segundo momento mais dramatico. Pivot narrativo em 7 palavras. Espaco visual obrigatorio.

3. **Pour Over, Beat 7** (ultimo beat do video) — Fecha o catalogo inteiro referenciando Espresso e Cold Brew. O visual precisa de recall (flash rapido de imagens ja usadas). O fecho "some people love it and others find it exhausting" e ambivalente — nao e positivo nem negativo.

4. **Turkish Coffee, Beat 7** (closer de leitura de borra) — Closer mais memoravel. A imagem da borra no pires e o frame que alguem faria screenshot.

5. **Cold Brew, Beat 4** (comparacao iced coffee vs cold brew) — Pede OBRIGATORIAMENTE layout lado-a-lado. Se esse visual nao for claro, o beat nao funciona.

---

## Indice de Arquivos

| Arquivo | Conteudo |
|---------|----------|
| `scripts/every-coffee-explained.txt` | Roteiro original (texto cru) |
| `scripts/coffee-types.md` | Roteiro estruturado completo com beats, visuais e assets |
| `docs/analysis/07-estrutura-narrativa-roteiro.md` | Analise estrutural do roteiro (beats, assimetrias, padroes) |
| `docs/templates/catalog-script-guide.md` | Guia adaptavel para converter qualquer roteiro de catalogo |
| `docs/structured-data/coffee-types-summary.md` | Este arquivo — resumo de producao com inventario de assets |
