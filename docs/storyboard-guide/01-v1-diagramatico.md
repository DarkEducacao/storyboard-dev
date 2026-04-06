# V1 — Storyboard Diagramatico

Storyboard em texto estruturado. Cada beat vira um card com narracao, direcao visual, camera, timing e transicao. Sem ilustracoes.

---

## Como Funciona a Geracao

### Beat por beat, nao o video inteiro
O storyboard e gerado **um item do catalogo por vez**. Se o roteiro tem 8 itens, voce gera 8 vezes — nao 1 vez com tudo.

Por que:
- **Tokens**: Um item com 6-7 beats cabe confortavelmente numa geracao. 8 itens com ~52 beats estoura contexto ou gera resultado superficial.
- **Iteracao**: Se o beat 3 do item 2 precisa de ajuste, voce regenera so o item 2 — nao os 8.
- **Validacao**: Voce valida cada item antes de passar pro proximo. Erros nao se propagam.

### O que o Claude Code gera
Um componente React (ou HTML puro) com cards diagramaticos. Cada card e um beat do roteiro com todos os dados de producao.

### Onde salvar
`src/components/storyboard/[nome-do-item].tsx` (ou `.html`)

Exemplo: `src/components/storyboard/turkish-coffee.tsx`

---

## Prompt Base — Gerar V1 de Um Item

```
Leia o roteiro estruturado em scripts/coffee-types.md.

Gere o storyboard V1 (diagramatico, sem ilustracoes) para o item 
[ITEM_NUMERO] — [NOME_DO_ITEM].

Para cada beat desse item, crie um card com:
- Numero do beat e tipo descritivo
- Texto da narracao (citacao exata do roteiro)
- Direcao visual (o que aparece na tela)
- Tipo de camera/transicao (scale-in, corte seco, fade, pop-in)
- Timing: duracao em segundos, momento de entrada/saida
- Assets necessarios (listados com quantidade)
- Nota de edicao (se houver no roteiro)
- Indicador de transicao para o proximo beat

Gere como um componente React em:
src/components/storyboard/[NOME_SLUG].tsx

O componente deve renderizar os cards lado a lado (ou em grid) 
com visual limpo — fundo branco, bordas suaves, tipografia clara.
Cada card usa cores para indicar tipo de beat:
- Abertura/title card: borda azul
- B-roll/visual: borda cinza
- Dados/apresentacao: borda amarela
- Comparacao: borda verde
- Micro-beat/pivot: borda vermelha
- Closer/fecho: borda roxa

Consulte docs/analysis/04-transicoes-e-movimento.md para os padroes 
de transicao do formato de referencia.

Nao gere SVGs. Nao gere animacoes. So cards de texto estruturado.
```

### Como preencher os placeholders

| Placeholder | Exemplo |
|-------------|---------|
| `[ITEM_NUMERO]` | `#2` |
| `[NOME_DO_ITEM]` | `Turkish Coffee` |
| `[NOME_SLUG]` | `turkish-coffee` |

---

## Prompt — Gerar o Video Inteiro (apos validar por partes)

So use este prompt DEPOIS de ter gerado e validado cada item individualmente.

```
Leia o roteiro estruturado em scripts/coffee-types.md.

Ja gerei e validei o storyboard V1 de cada item individualmente.
Agora preciso de um componente unico que junte TODOS os itens 
em sequencia, com:

- Navegacao lateral (tabs ou scroll) por item
- Timeline visual mostrando a duracao total do video
- Indicador de posicao atual na timeline
- Transicoes entre itens (fade branco) marcadas visualmente
- Contador de assets totais no rodape

Gere em: src/components/storyboard/full-storyboard.tsx

Reutilize a mesma estrutura de cards dos componentes individuais.
Importe os dados de cada item — nao duplique.
```

---

## Exemplo Completo: Item #2 — Turkish Coffee

### O que voce cola no Claude Code:

```
Leia o roteiro estruturado em scripts/coffee-types.md.

Gere o storyboard V1 (diagramatico, sem ilustracoes) para o item 
#2 — Turkish Coffee.

Para cada beat desse item, crie um card com:
- Numero do beat e tipo descritivo
- Texto da narracao (citacao exata do roteiro)
- Direcao visual (o que aparece na tela)
- Tipo de camera/transicao (scale-in, corte seco, fade, pop-in)
- Timing: duracao em segundos, momento de entrada/saida
- Assets necessarios (listados com quantidade)
- Nota de edicao (se houver no roteiro)
- Indicador de transicao para o proximo beat

Gere como um componente React em:
src/components/storyboard/turkish-coffee.tsx

O componente deve renderizar os cards lado a lado (ou em grid) 
com visual limpo — fundo branco, bordas suaves, tipografia clara.
Cada card usa cores para indicar tipo de beat:
- Abertura/title card: borda azul
- B-roll/visual: borda cinza
- Dados/apresentacao: borda amarela
- Comparacao: borda verde
- Micro-beat/pivot: borda vermelha
- Closer/fecho: borda roxa

Consulte docs/analysis/04-transicoes-e-movimento.md para os padroes 
de transicao do formato de referencia.

Nao gere SVGs. Nao gere animacoes. So cards de texto estruturado.
```

### Output esperado (estrutura do card):

```
┌─────────────────────────────────────────────────┐
│ BEAT 1 — Declaracao de antiguidade        [AZUL]│
│─────────────────────────────────────────────────│
│                                                 │
│ NARRACAO:                                       │
│ "Turkish coffee. One of the oldest brewing      │
│ methods still in active use."                   │
│                                                 │
│ VISUAL: Title card com cutout PNG de xicara     │
│ de cafe turco (fincan) + nome rotacionado →     │
│ badge "TURKISH COFFEE"                          │
│                                                 │
│ CAMERA: Scale-in do cutout → shrink pra badge   │
│ TIMING: 4s (2s title + 2s transicao)            │
│ ASSETS: 1x cutout PNG, 1x icone circular        │
│                                                 │
│ NOTA: Tom mais solene que Espresso.              │
│                                                 │
│ → TRANSICAO: corte seco para Beat 2             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ BEAT 2 — Processo ritual com choque final [CINZA]│
│─────────────────────────────────────────────────│
│                                                 │
│ NARRACAO:                                       │
│ "Finely ground coffee — almost powder — mixed   │
│ with water and sugar in a small copper pot       │
│ called a cezve, then heated slowly until it      │
│ foams. No filter. No paper. You drink the        │
│ grounds."                                       │
│                                                 │
│ VISUAL: Clip/foto cezve no fogo → espuma        │
│ subindo → close xicara com borra.               │
│ Texto overlay: "YOU DRINK THE GROUNDS"          │
│                                                 │
│ CAMERA: Corte seco entre 3 shots                │
│ TIMING: 10s                                     │
│ ASSETS: 2-3x fotos/clips (cezve, espuma, borra)│
│                                                 │
│ NOTA: "You drink the grounds" = MICRO-BEAT.     │
│ Pausa visual de 0.5s antes.                     │
│                                                 │
│ → TRANSICAO: corte seco para Beat 3             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ BEAT 3 — Ancora temporal            [VERMELHO]  │
│─────────────────────────────────────────────────│
│                                                 │
│ NARRACAO:                                       │
│ "The technique hasn't changed in over 500       │
│ years."                                         │
│                                                 │
│ VISUAL: Texto "500 YEARS" overlay sobre         │
│ imagem historica otomana                        │
│                                                 │
│ CAMERA: Estatico (overlay sobre shot anterior)  │
│ TIMING: 3s                                      │
│ ASSETS: 1x ilustracao otomana (pode reusar)     │
│                                                 │
│ NOTA: Micro-beat. NAO apressar.                 │
│                                                 │
│ → TRANSICAO: corte seco para Beat 4             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ BEAT 4 — Fato historico absurdo      [AMARELO]  │
│─────────────────────────────────────────────────│
│                                                 │
│ NARRACAO:                                       │
│ "It became so culturally significant in the     │
│ Ottoman Empire that there was a law allowing    │
│ a woman to divorce her husband if he failed     │
│ to provide her with enough coffee."             │
│                                                 │
│ VISUAL: Silhueta + quadro de apresentacao       │
│ Texto: "OTTOMAN LAW" / "DIVORCE OVER COFFEE"   │
│                                                 │
│ CAMERA: Pop-in do texto no quadro               │
│ TIMING: 8s                                      │
│ ASSETS: 1x silhueta, 1x quadro (ou ilustracao) │
│                                                 │
│ NOTA: Fato tao surpreendente que o visual nao   │
│ precisa competir. Deixar narracao trabalhar.    │
│                                                 │
│ → TRANSICAO: corte seco para Beat 5             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ BEAT 5 — Validacao institucional      [AMARELO] │
│─────────────────────────────────────────────────│
│                                                 │
│ NARRACAO:                                       │
│ "UNESCO recognized Turkish coffee culture as    │
│ an Intangible Cultural Heritage in 2013."       │
│                                                 │
│ VISUAL: Selo/texto "UNESCO HERITAGE 2013"       │
│                                                 │
│ CAMERA: Pop-in                                  │
│ TIMING: 4s                                      │
│ ASSETS: 1x icone/selo UNESCO                    │
│                                                 │
│ NOTA: Rapido. Ancora de credibilidade.          │
│                                                 │
│ → TRANSICAO: corte seco para Beat 6             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ BEAT 6 — Descricao sensorial contrastiva [CINZA]│
│─────────────────────────────────────────────────│
│                                                 │
│ NARRACAO:                                       │
│ "The taste is intense, thick, and muddy         │
│ compared to anything you'd get at a modern      │
│ café."                                          │
│                                                 │
│ VISUAL: Close-up cafe turco (textura densa)     │
│                                                 │
│ CAMERA: Estatico ou leve Ken Burns              │
│ TIMING: 5s                                      │
│ ASSETS: 1x foto close-up cafe turco             │
│                                                 │
│ NOTA: "Muddy" e honesto, nao negativo.          │
│                                                 │
│ → TRANSICAO: corte seco para Beat 7             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ BEAT 7 — Curiosidade mistica / closer    [ROXO] │
│─────────────────────────────────────────────────│
│                                                 │
│ NARRACAO:                                       │
│ "And when you finish, the leftover grounds at   │
│ the bottom of your cup are traditionally        │
│ flipped onto the saucer and read as fortune-    │
│ telling symbols. It's the only coffee in the    │
│ world that tells your future after you drink    │
│ it."                                            │
│                                                 │
│ VISUAL: Xicara virada no pires → close-up       │
│ dos padroes na borra. Texto: "TELLS YOUR        │
│ FUTURE"                                         │
│                                                 │
│ CAMERA: Corte seco entre 2 shots + texto pop-in │
│ TIMING: 10s                                     │
│ ASSETS: 2x fotos (xicara virada, borra)         │
│                                                 │
│ NOTA: CLOSER MAIS FORTE DO ROTEIRO. A punchline │
│ precisa respirar. Pausa visual antes do corte.  │
│                                                 │
│ → TRANSICAO: fade branco (0.5s) → proximo item  │
└─────────────────────────────────────────────────┘
```

### Resumo do item no rodape:

```
TURKISH COFFEE — 7 beats | ~64s | 10 assets
Timeline: [████████████████████████████████] 64s
Tipos: 1 abertura, 3 b-roll, 2 dados, 1 closer
```

---

## Dicas de Iteracao

### Ajustar sem regenerar tudo

```
No storyboard V1 do Turkish Coffee (src/components/storyboard/turkish-coffee.tsx):

Beat 3 — muda a duracao de 3s para 5s. 
O "500 years" precisa de mais tempo na tela.

Nao regenere o item inteiro. So ajuste esse beat.
```

### Adicionar um beat

```
No storyboard V1 do Turkish Coffee:

Adiciona um beat entre o 5 e o 6. Novo beat:
- Tipo: Comparacao com cafe moderno
- Narracao: [texto que voce quer adicionar]
- Visual: Layout lado-a-lado — cafe turco vs cafe filtrado
- Timing: 5s

Renumere os beats subsequentes.
```

### Remover um beat

```
No storyboard V1 do Turkish Coffee:

Remove o beat 5 (validacao UNESCO). O item funciona 
sem essa informacao. Renumere os beats.
```

### Alterar transicao especifica

```
No storyboard V1 do Turkish Coffee:

Beat 2 → Beat 3: muda a transicao de "corte seco" pra 
"dissolve lento" (0.5s). O "500 years" funciona melhor 
entrando suavemente do que com corte abrupto.
```

---

## ECONOMIA DE TOKENS — REGRAS DE OURO

1. **Nunca gere o storyboard inteiro de uma vez.** Gere item por item. Um catalogo de 8 itens = 8 geracoes, nao 1.

2. **Valide a estrutura (V1) antes de adicionar visuais (V2/V3).** Se o beat 3 esta no lugar errado, e mais barato mover no V1 do que regenerar V2 com SVGs novos.

3. **Peca ajustes cirurgicos.** "No beat 3 do item 2, muda a transicao pra zoom" e 10x mais barato que "refaz o item 2 inteiro".

4. **Use o roteiro .md como source of truth.** Se mudar algo no roteiro, regenera so o item afetado no storyboard — nao todos.

5. **Pra catalogos grandes (20+ itens), gere em blocos de 5 itens.** Isso mantem o contexto sem estourar a janela. Valide cada bloco antes de ir pro proximo.
