# Guia de Conversao: Roteiro de Catalogo Visual → .md Estruturado

Este guia ensina como pegar qualquer roteiro de catalogo visual (faceless YouTube, estilo "Every X Explained") e converter para o formato `.md` estruturado com beats, direcoes visuais e metadados de producao.

Nao e um template rigido. E um metodo de analise + conversao que se adapta ao roteiro real.

---

## PASSO 1: Diagnostico do Roteiro

Antes de converter, responda estas perguntas lendo o roteiro cru:

### Moldura narrativa
- [ ] **Tem hook?** (Introducao antes do primeiro item que prende atencao — promessa, pergunta, dado chocante)
- [ ] **Tem CTA?** (Call to action no final — subscribe, like, comentar)
- [ ] **Tem bumps de retencao?** (Frases entre itens que incentivam continuar assistindo — "mas espere", "o proximo vai te surpreender")
- [ ] **Tem narrador-personagem?** (Uso de "eu", opiniao pessoal, primeiro pessoa)
- [ ] **Tem transicoes narrativas?** (Frases que conectam um item ao seguinte)

Se a resposta for "nao" para algum destes, **NAO invente**. Documente a ausencia e siga em frente. O .md final deve refletir o que EXISTE, nao o que "deveria existir".

### Estrutura de itens
- Quantos itens o catalogo tem?
- Os itens sao numerados explicitamente?
- Ha marcacoes de edicao no roteiro (`[corte]`, `---`, etc.)?
- Todos os itens tem extensao similar ou ha assimetria grande?

### Tom
- Qual o registro da voz? (enciclopedico, casual, humoristico, dramatico, poetico)
- O tom e consistente ou muda entre itens?
- Ha momentos onde o tom quebra (humor subito, seriedade inesperada)?

---

## PASSO 2: Identificar Beats

Um **beat** e uma unidade minima de intencao narrativa. E o ponto onde:
- O tom muda (de informativo para emocional, de tecnico para anedotico)
- Um editor cortaria para uma imagem diferente
- Um dado ou frase exige um visual especifico para funcionar
- O ritmo acelera ou desacelera

### Como encontrar beats num paragrafo

Leia o texto em voz alta (ou mentalmente). Cada vez que voce sente uma "mudanca de engrenagem" — um shift no que o texto esta fazendo — voce encontrou uma fronteira de beat.

**Exemplo**: 
> "Turkish coffee. One of the oldest brewing methods still in active use. Finely ground coffee — almost powder — mixed with water and sugar..."

- "Turkish coffee. One of the oldest..." = Beat 1 (declaracao de status)
- "Finely ground coffee — almost powder..." = Beat 2 (processo tecnico)

A mudanca e: de "o que e" para "como faz". Isso e uma fronteira de beat.

### Tipos de beats (linguagem livre, nao pre-definida)

NAO use categorias genericas como "introducao", "desenvolvimento", "conclusao". Descreva o que o beat REALMENTE faz. Exemplos reais encontrados em roteiros de catalogo:

| Tipo real | O que faz |
|-----------|-----------|
| Declaracao de status fundacional | Posiciona o item como base/origem de algo maior |
| Correcao de misconception | Desfaz o que o espectador assume errado |
| Processo tecnico com analogia visceral | Dado tecnico tornado tangivel por comparacao |
| Fato historico absurdo | Dado real que parece inventado |
| Pivot retorico explicito | Frase curta que inverte o tom (ex: "But here's the dark side.") |
| Subversao de expectativa sobre autenticidade | O que voce acha que e autentico nao e |
| Trade-off honesto | Apresenta dois lados sem tomar partido |
| Sintese cruzada do catalogo | Referencia outros itens para criar fechamento |
| Curiosidade mistica como closer | Termina com algo magico/inesperado |
| Desmonte completo + punchline | Destroi a premissa com evidencia e ironia |
| Pivot de reframing | Muda o frame de "fraqueza" para "genialidade" |

Se o beat nao se encaixa em nenhum desses, **invente o nome**. O importante e que a descricao seja precisa para o que o texto faz.

### Micro-beats

Micro-beats sao frases de 3-10 palavras com impacto desproporcional. Exemplos:
- "You drink the grounds."
- "Just patience."
- "But here's the dark side."
- "That's the rule."

Eles sao OURO editorial: momentos onde o editor pode pausar, cortar para imagem de impacto, ou deixar a frase respirar. Identifique todos.

---

## PASSO 3: Metadados (frontmatter YAML)

### Campos obrigatorios

```yaml
---
title: "Nome do video"
format: catalogo_visual_faceless
num_items: 8
estimated_duration_seconds: 486
items:
  - Item 1
  - Item 2
---
```

### Campos condicionais (so inclua se existirem no roteiro)

```yaml
has_hook: true/false
has_cta: true/false
has_retention_bumps: true/false
has_implicit_opener: true  # se o primeiro item se posiciona como "base de tudo"
has_implicit_closer: true  # se o ultimo item referencia outros
tone: enciclopedico-casual
transition_between_items: "[corte seco]"
narration_wpm: 150  # words per minute estimado
channel_style: dark/faceless YouTube
```

### Campos opcionais (uteis mas nao essenciais)

```yaml
estimated_duration_formatted: "8:06"
narrator_voice: male/female/neutral
background_music: yes/no/unknown
language: pt-BR/en-US
```

**Regra**: se o roteiro nao tem hook, NAO inclua `hook_text: ""`. Simplesmente inclua `has_hook: false` e siga.

---

## PASSO 4: Formato de Cada Beat

```markdown
### Beat N — [Tipo descritivo do beat]

> [Texto exato da narracao — citacao fiel do roteiro]

**TIPO:** [Descricao do tipo — linguagem livre, especifica]
**VISUAL:** [Direcao visual baseada nos padroes visuais do formato]
**ASSET:** [Lista de recursos necessarios — fotos, clips, silhuetas, infograficos]
**DURACAO:** [Estimativa em segundos]
**NOTA_EDICAO:** [Observacoes para o editor — o que nao pode dar errado, o que precisa de atencao]
```

### Guidelines para cada campo

**TIPO**: Seja especifico. "Desenvolvimento" nao e um tipo. "Ciencia da extracao + correcao de confusao comum" e um tipo.

**VISUAL**: Baseie-se no sistema visual do formato:
- Fundo branco, badge no top-left, imagens com cantos arredondados
- Para dados/regras: silhueta + quadro de apresentacao
- Para comparacoes: layout lado-a-lado com texto central
- Para contexto: mapas, fotos historicas, ilustracoes
- Para impacto: close-up, clip vertical (estilo TikTok), food porn

**ASSET**: Seja concreto. Nao escreva "uma imagem relevante". Escreva "1x foto close-up de crema de espresso mostrando variacao de cor". Inclua quantidade.

**DURACAO**: Calcule baseado no texto:
- ~2.5 palavras por segundo de narracao (150 WPM)
- Adicione 1-3s para pausas visuais em micro-beats
- Beats com infografico/comparacao precisam de +2s alem da narracao (tempo de leitura)

**NOTA_EDICAO**: Inclua:
- Micro-beats que precisam de pausa
- Dependencias visuais ("este beat PEDE layout lado-a-lado")
- Momentos criticos ("a punchline precisa respirar")
- Reutilizacao de assets ("reusar foto do beat 2")

---

## PASSO 5: Adaptacoes por Tipo de Roteiro

### Roteiro COM hook
Se o roteiro comeca com uma introducao antes do primeiro item:

```markdown
## HOOK

### Beat 1 — [Tipo do hook]
> [Texto do hook]
**TIPO:** [ex: Promessa provocativa, pergunta retorica, dado chocante]
**VISUAL:** ...
```

O hook fica ANTES do primeiro item numerado. Use `## HOOK` como header.

### Roteiro SEM hook (como o exemplo analisado)
Comece direto no `## [#1] ITEM`. Inclua `has_hook: false` no frontmatter. NAO invente hook.

### Roteiro COM CTA
Se o roteiro termina com call to action:

```markdown
## CTA
### Beat 1 — [Tipo do CTA]
> [Texto do CTA]
```

### Roteiro COM bumps de retencao entre itens
Se ha frases entre itens que incentivam continuar assistindo:

```markdown
**[corte seco]**

### BUMP — [Tipo do bump]
> "But you won't believe what the next one does..."
**DURACAO:** 3s
**VISUAL:** Teaser visual do proximo item (blur/silhueta)

---
## [#N+1] PROXIMO ITEM
```

### Roteiro com itens de extensoes muito diferentes
Documente no header de cada item:
```markdown
## [#3] ITEM CURTO
**Beats**: 3 | **Palavras**: ~60 | **Duracao narracao**: ~24s
```

Isso permite que a producao saiba antecipadamente que este item precisa de menos assets.

---

## PASSO 6: Verificacao Final

### Checklist pos-conversao
- [ ] Todo texto do roteiro original esta presente (nenhuma frase foi perdida)
- [ ] O frontmatter reflete a realidade (nao tem `has_hook: true` se nao tem hook)
- [ ] Os beats refletem mudancas REAIS de intencao (nao foram forcados em categorias)
- [ ] Cada beat tem todos os 5 campos (TIPO, VISUAL, ASSET, DURACAO, NOTA_EDICAO)
- [ ] Micro-beats foram identificados e marcados em NOTA_EDICAO
- [ ] A soma das duracoes e coerente com a duracao estimada total
- [ ] Assets foram listados concretamente (nao "imagem relevante")
- [ ] Nenhum beat foi inventado que nao esta no roteiro original

### Contagem de assets (producao)
Some todos os assets listados para ter o total de producao:
- Total de cutout PNGs: (1 por item)
- Total de icones de badge: (1 por item)
- Total de fotos/clips de B-roll: (somar todos)
- Total de silhuetas/infograficos: (somar todos)
- Total de layouts comparativos: (quantos momentos lado-a-lado)
- Assets reutilizaveis: (quais aparecem em mais de 1 beat)

---

## Exemplos

### Exemplo completo (item com 6 beats)

```markdown
## [#1] ESPRESSO

**Beats**: 6 | **Palavras**: ~150 | **Duracao narracao**: ~60s
**Role no catalogo**: Opener fundacional

---

### Beat 1 — Declaracao de status fundacional
> Espresso. The foundation of almost every coffee drink you've ever ordered.
**TIPO:** Declaracao de status fundacional
**VISUAL:** Title card com cutout PNG de espresso + nome rotacionado → badge
**ASSET:** 1x cutout PNG espresso, 1x icone circular
**DURACAO:** 4s
**NOTA_EDICAO:** Primeira impressao do video inteiro.

---

### Beat 2 — Correcao de misconception
> It's not a bean, it's not a roast — it's a method.
**TIPO:** Correcao de misconception
**VISUAL:** Sequencia: grao (X) → torra (X) → maquina (check)
**ASSET:** 3x imagens ou 1x animacao
**DURACAO:** 4s
**NOTA_EDICAO:** Tres negacoes pedem tres cortes sincronizados.
```

### Exemplo minimo (item com 3 beats)

```markdown
## [#12] MATCHA LATTE

**Beats**: 3 | **Palavras**: ~45 | **Duracao narracao**: ~18s

---

### Beat 1 — Definicao por contraste
> Matcha latte. Not coffee at all — but it's on every coffee shop menu.
**TIPO:** Definicao por contraste com o universo do catalogo
**VISUAL:** Title card + badge. Close de matcha latte verde vibrante.
**ASSET:** 1x cutout PNG, 1x icone, 1x foto
**DURACAO:** 5s
**NOTA_EDICAO:** O verde destoa visualmente de todo o resto do video. Usar isso como impacto.

---

### Beat 2 — Processo distinto
> Stone-ground green tea whisked into steamed milk.
**TIPO:** Processo ultra-simples
**VISUAL:** Clip de matcha sendo peneirado e batido com chasen.
**ASSET:** 1x clip de preparo de matcha
**DURACAO:** 5s
**NOTA_EDICAO:** Processo curto — nao esticar.

---

### Beat 3 — Posicao no mercado
> It outsells most espresso drinks in East Asia.
**TIPO:** Dado de mercado surpreendente
**VISUAL:** Infografico de vendas ou mapa Asia Oriental.
**ASSET:** 1x infografico ou mapa
**DURACAO:** 5s
**NOTA_EDICAO:** Dado e o closer — precisa de peso visual (numero grande).
```

---

## Principios-Guia

1. **O roteiro e a verdade**. Nao adicione o que nao existe. Nao remova o que existe. Estruture fielmente.

2. **Beats sao unidades de intencao, nao de tempo**. Um beat pode durar 3 segundos ou 15. O que define e a mudanca de intencao, nao o relogio.

3. **Nomeie beats com precisao, nao com genericos**. "Fato historico absurdo" e melhor que "contexto". "Pivot retorico explicito" e melhor que "transicao".

4. **Assimetria e informacao**. Se um item tem 8 beats e outro tem 3, isso NAO e um problema — e um dado de producao. O item de 8 beats precisa de mais assets.

5. **Micro-beats sao o que separa edicao boa de edicao excelente**. Identifique frases curtas de alto impacto. Sao os momentos onde o editor pode brilhar.

6. **O visual serve o texto, nao o contrario**. A direcao visual deve amplificar o que a narracao esta fazendo naquele exato momento. Se o texto e tecnico, o visual e didatico. Se o texto e emotivo, o visual e atmosferico.

7. **Documente o que falta tanto quanto o que existe**. "Este roteiro NAO tem hook" e tao valioso quanto "O hook e uma pergunta retorica".
