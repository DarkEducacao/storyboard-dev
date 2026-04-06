# Como Escolher a Variacao de Storyboard

Voce tem o roteiro estruturado (.md com beats, visuais, assets). Agora precisa gerar o storyboard. Existem 3 variacoes. A escolha certa depende de quem vai usar e pra que.

---

## As 3 Variacoes

### V1 — DIAGRAMATICO (texto + blocos de cor + indicadores)

Pense no V1 como um **mapa de producao**. Nao tem ilustracao nenhuma. Cada cena do video vira um card retangular com:

- Texto exato da narracao
- Direcao visual descrita em texto ("close-up de cezve no fogo, espuma subindo")
- Indicador de camera (scale-in, corte seco, fade branco)
- Timing exato (entrada, duracao, saida)
- Transicao pro proximo beat
- Assets necessarios listados

E um documento de TRABALHO. O editor abre, le, e sabe exatamente o que fazer em cada segundo do video. Nao precisa imaginar como vai ficar — precisa saber o que precisa fazer.

**Pra quem serve**: Editor que ja tem experiencia. Equipes que trabalham rapido. Producao onde o estilo visual ja esta bem definido (como o nosso — fundo branco, badge, cantos arredondados). O editor le "silhueta + quadro com dado" e sabe montar sem precisar de referencia visual.

**Custo de tokens**: ~1x (base). Geracao rapida. Um item do catalogo com 6-7 beats gera em segundos.

**Quando NAO usar**: Quando o editor nunca viu o estilo visual antes. Quando voce esta trabalhando com alguem que precisa VER o que "badge pill azul-marinho no top-left" significa na pratica. Quando o projeto e complexo demais pra confiar so na descricao.

---

### V2 — COM VISUAIS (V1 + ilustracoes SVG de composicao)

V2 e tudo que o V1 tem, mais uma **ilustracao esquematica** de cada frame. Nao e arte bonita — e um diagrama de composicao em SVG mostrando:

- Onde fica o badge (retangulo azul no top-left)
- Onde fica a imagem principal (retangulo cinza com cantos arredondados no centro)
- Onde fica o texto (bloco de texto posicionado)
- Qual a paleta de cor dominante do frame
- Setas indicando direcao de camera (zoom-in, slide, etc.)

Imagine que voce esta explicando o frame pra alguem pelo telefone — o V1 e o que voce diria. O V2 e o que voce desenharia num guardanapo.

**Pra quem serve**: Editor que precisa ver a composicao antes de executar. Projetos com varios editores (o SVG garante que todos entendam a mesma coisa). Quando voce esta definindo um estilo visual pela primeira vez e quer validar antes de produzir.

**Custo de tokens**: ~3x comparado ao V1. Cada beat gera um SVG alem do card de texto. Geracao moderada — nao e lento, mas pesa mais.

**Quando NAO usar**: Quando o editor e experiente e ja trabalhou nesse formato. O SVG vira "decoracao" — gasta tokens sem mudar o resultado. Se o V1 ja resolve, use V1.

---

### V3 — ANIMADO (V2 + animacoes de camera e transicao)

V3 pega os SVGs do V2 e adiciona **movimento**. Os elementos se animam simulando o que vai acontecer no video final:

- Badge desliza pra posicao (slide-in)
- Imagem central escala de pequeno para grande (scale-in)
- Texto aparece com pop-in ou fade
- Transicoes entre beats simulam o corte seco ou fade branco
- Dados numericos entram com slam/scale

E como um **animatic de baixa fidelidade**. Nao e o video final, mas simula o ritmo e o movimento.

**Pra quem serve**: Editor iniciante que precisa VER o ritmo antes de replicar. Projetos de alta complexidade visual onde o timing e crucial. Apresentacao pra cliente ou aprovacao antes de gastar horas editando. Quando voce quer validar se a sequencia de beats "funciona" antes de produzir.

**Custo de tokens**: ~6x comparado ao V1. Cada SVG ganha keyframes CSS, timing functions, sequenciamento. Geracao lenta — e o mais caro de todos.

**Quando NAO usar**: Pra videos simples ou com estilo visual ja dominado. Quando velocidade de producao e prioridade. Quando voce ja sabe que o ritmo funciona e so precisa da lista de shots.

---

## COMO DECIDIR EM 3 PERGUNTAS

### Pergunta 1: Seu editor precisa VER a composicao ou so LER a direcao?

Se o editor abre o storyboard e le "badge pill azul-marinho no top-left, imagem retrato centralizada com cantos arredondados, 40% da largura" e sabe EXATAMENTE o que montar — **V1 basta**.

Se ele precisa de um diagrama mostrando onde cada coisa fica no frame — **V2 ou V3**.

```
So ler a direcao → V1
Precisa ver composicao → Pergunta 2
```

### Pergunta 2: O video tem movimentos de camera complexos?

Se o video e majoritariamente corte seco entre imagens estaticas com scale-in simples (como o nosso formato de catalogo) — **V2 basta**. O SVG estatico mostra a composicao, e as transicoes sao simples o suficiente pra descrever em texto.

Se o video tem sequencias de zoom continuos, pans elaborados, staggers de multiplos elementos, ou timing critico entre narracao e movimento — **V3**.

```
Movimentos simples (corte seco, scale-in, fade) → V2
Movimentos complexos (zoom continuo, pan, stagger) → V3
```

### Pergunta 3: Qual sua prioridade — velocidade ou fidelidade?

Isso nao e uma pergunta de qualidade. E uma pergunta de recurso. V3 e "melhor"? Tecnicamente sim. Mas se voce tem 20 itens pra produzir e precisa entregar rapido, V1 em 20 minutos > V3 em 3 horas.

```
Velocidade maxima → V1
Equilibrio custo/beneficio → V2
Fidelidade maxima / apresentacao → V3
```

---

## Fluxograma Visual

```
[Inicio]
  │
  ├─ Editor experiente no formato?
  │    ├─ SIM → V1 (diagramatico)
  │    └─ NAO ↓
  │
  ├─ Video tem movimentos complexos?
  │    ├─ NAO → V2 (visuais SVG)
  │    └─ SIM ↓
  │
  └─ V3 (animado)
```

---

## Comparacao Rapida

| | V1 Diagramatico | V2 Visuais | V3 Animado |
|---|---|---|---|
| **Output** | Cards de texto | Cards + SVG | Cards + SVG animado |
| **Tokens** | ~1x | ~3x | ~6x |
| **Velocidade** | Rapido | Moderado | Lento |
| **Editor minimo** | Experiente | Intermediario | Qualquer |
| **Validacao visual** | Nenhuma | Composicao | Composicao + ritmo |
| **Melhor pra** | Producao rapida | Consistencia | Apresentacao/aprovacao |
| **Arquivo gerado** | React/HTML | React/HTML + SVG inline | React/HTML + SVG + CSS @keyframes |

---

## Abordagem Recomendada: Cascata

A forma mais segura e economica e SEMPRE comecar pelo V1:

```
V1 (validar estrutura e timing)
 ↓ "Aprovado? Adiciona visuais."
V2 (validar composicao)
 ↓ "Precisa de animacao? Adiciona."
V3 (validar ritmo e movimento)
```

Nunca pule direto pro V3. Se a estrutura estiver errada, voce vai refazer tudo — estrutura, visuais E animacao. Cascata: valide cada camada antes de adicionar a proxima.

---

## ECONOMIA DE TOKENS — REGRAS DE OURO

1. **Nunca gere o storyboard inteiro de uma vez.** Gere item por item. Um catalogo de 8 itens gera 8 vezes, nao 1.

2. **Valide a estrutura (V1) antes de adicionar visuais (V2/V3).** Se o beat 3 esta no lugar errado, e mais barato mover no V1 do que regenerar V2 com SVGs novos.

3. **Peca ajustes cirurgicos.** "No beat 3 do item 2, muda a transicao pra zoom" e 10x mais barato que "refaz o item 2 inteiro".

4. **Use o roteiro .md como source of truth.** Se mudar algo no roteiro, regenera so o item afetado no storyboard — nao todos.

5. **Pra catalogos grandes (20+ itens), gere em blocos de 5 itens.** Isso mantem o contexto sem estourar a janela. Valide cada bloco antes de ir pro proximo.
