# V3 — Storyboard Animado

Tudo que o V2 tem (cards + SVGs de composicao) + animacoes CSS que simulam o movimento de camera e a sequencia de entrada/saida de elementos.

---

## O Que as Animacoes Simulam

As animacoes NAO sao o video final. Sao um **animatic de baixa fidelidade** que mostra:

- **Ordem de entrada** dos elementos (o que aparece primeiro, segundo, terceiro)
- **Tipo de movimento** (scale-in, slide, fade, pop)
- **Timing** (quanto tempo cada elemento leva pra entrar/sair)
- **Ritmo** (beats rapidos vs lentos, pausas dramaticas)

O editor assiste a animacao e entende o RITMO antes de montar o video real.

---

## Mapa de Animacoes por Tipo de Beat

Baseado nos padroes de `docs/analysis/04-transicoes-e-movimento.md`:

| Tipo de Beat | Animacao Principal | CSS Equivalente |
|---|---|---|
| **Abertura / title card** | Scale-in do cutout + texto aparece rotacionado → shrink pra badge | `transform: scale(0)→scale(1)` + `rotate(-15deg)` → morph pro canto |
| **B-roll com imagem** | Imagem escala de 80% pra 100% (scale-in suave) | `transform: scale(0.8)→scale(1)` com `ease-out` |
| **Dado numerico** | Numero entra com slam/scale (overshoot) | `transform: scale(0)→scale(1.15)→scale(1)` com `cubic-bezier` |
| **Silhueta + quadro** | Silhueta slide-in lateral, texto pop-in sequencial | `translateX(-100%)→0` + stagger de `opacity:0→1` |
| **Comparacao lado-a-lado** | Esquerda entra primeiro, depois direita, depois texto central | Stagger: item A (0s), item B (0.3s), texto (0.6s) |
| **Micro-beat / pivot** | Pause + fade lento | `opacity:0→1` com `duration:0.8s` e `delay` significativo |
| **Closer / punchline** | Texto aparece com weight (sem bounce — solido) | `opacity:0→1` com `ease-in`, sem overshoot |
| **Transicao entre itens** | Fade pra branco, depois fade-in do proximo | `opacity:1→0` (branco) + `opacity:0→1` (novo item) |

### Animacoes que correspondem a direcoes de camera do roteiro

| Direcao no roteiro | Animacao CSS |
|---|---|
| "Scale-in" | `@keyframes scaleIn { from { transform: scale(0.7); opacity: 0 } to { transform: scale(1); opacity: 1 } }` |
| "Corte seco" | Sem transicao — swap instantaneo (`display: none` / `block`) |
| "Fade branco" | `@keyframes fadeWhite { to { opacity: 0 } }` no elemento atual + delay no proximo |
| "Pop-in" | `@keyframes popIn { 0% { transform: scale(0) } 70% { transform: scale(1.1) } 100% { transform: scale(1) } }` |
| "Slide-in lateral" | `@keyframes slideIn { from { transform: translateX(-50px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }` |
| "Texto overlay aparece" | `@keyframes textReveal { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }` |
| "Ken Burns suave" | `@keyframes kenBurns { from { transform: scale(1) } to { transform: scale(1.05) } }` com `duration: 5s` |

---

## Abordagem Recomendada: Cascata V1 → V2 → V3

NUNCA pule direto pro V3. A cascata:

```
PASSO 1: Gera V1 do item → Valida estrutura e timing
         Custo: ~1x tokens
         
PASSO 2: Adiciona SVGs (V2) → Valida composicao
         Custo: ~2x tokens (incremental)
         
PASSO 3: Adiciona animacoes (V3) → Valida ritmo e movimento
         Custo: ~2x tokens (incremental)
         
TOTAL cascata: ~5x tokens
VS gerar V3 do zero: ~6x tokens + risco de refazer tudo
```

Se voce gera V3 direto e a estrutura esta errada, voce refaz TUDO — estrutura, SVGs E animacoes. Na cascata, cada camada e validada antes de adicionar a proxima.

---

## Prompt Base — Gerar V3 de Um Item (do zero)

```
Leia o roteiro estruturado em scripts/coffee-types.md.
Leia os padroes visuais em docs/analysis/01-composicao-visual.md.
Leia os padroes de transicao em docs/analysis/04-transicoes-e-movimento.md.

Gere o storyboard V3 (diagramatico + visuais SVG + animacoes) 
para o item [ITEM_NUMERO] — [NOME_DO_ITEM].

Para cada beat, gere:

1. CARD DE TEXTO com narracao, direcao, camera, timing, assets

2. SVG DE COMPOSICAO (854x480) com:
   - Badge, areas de imagem, textos overlay, silhuetas, setas

3. ANIMACOES CSS por beat:
   - Cada SVG tem um botao "Play" que executa a animacao do beat
   - A animacao simula o movimento de camera descrito no roteiro
   - Use CSS @keyframes inline no componente
   - Timing functions: ease-out pra entradas, ease-in pra saidas
   - Animacoes de elementos dentro do SVG (nao do SVG inteiro)

Regras de animacao:
- Title card: scale(0)→scale(1) com rotate do texto
- B-roll: scale(0.8)→scale(1) ease-out 0.4s
- Dados/numeros: scale overshoot (0→1.15→1) 0.3s
- Texto pop-in: opacity + translateY com stagger de 0.2s entre linhas
- Silhueta: slideIn lateral 0.5s
- Fade branco entre itens: opacity 1→0 0.5s
- Micro-beats: delay maior antes da animacao (pausa dramatica)

Inclua um botao "Play All" que executa todos os beats em sequencia,
com delays baseados na duracao de cada beat.

Gere em: src/components/storyboard/[NOME_SLUG]-v3.tsx
```

---

## Prompt — Adicionar Animacoes a um V2 Existente

O mais eficiente. Use quando ja tem V2 validado:

```
O storyboard V2 do item [NOME_DO_ITEM] ja esta gerado e validado em 
src/components/storyboard/[NOME_SLUG]-v2.tsx.

Adiciona animacoes CSS aos SVGs, transformando em V3.

Para cada beat, adiciona:
- @keyframes inline com a animacao correspondente ao tipo de camera
- Botao "Play" individual por beat
- Timing baseado na duracao do beat no roteiro
- Pausa dramatica (delay extra) nos beats marcados como micro-beat

Mapa de animacoes:
- scale-in → scale(0.7→1) ease-out 0.4s
- corte seco → swap instantaneo (sem transicao)
- pop-in → scale(0→1.1→1) 0.3s
- slide-in → translateX(-50px→0) 0.5s
- fade → opacity(0→1) 0.5s
- ken burns → scale(1→1.05) 5s linear

Adiciona tambem um "Play All" que sequencia os beats com os timings 
corretos (duracao de cada beat como delay entre eles).

Consulte docs/analysis/04-transicoes-e-movimento.md para validar 
que as animacoes correspondem aos padroes do formato.

Nao altera a estrutura dos cards ou SVGs — so adiciona animacao.
Salva no mesmo arquivo, substituindo a versao anterior.
```

---

## Exemplo Completo: Item #1 — Espresso

Espresso e o melhor exemplo pra V3 porque tem:
- Title card com transicao complexa (scale + rotate → morph pra badge)
- Analogia visual forte (9 bars / 90m underwater)
- Comparacao de 3 cremas (stagger de entrada)
- Micro-beat ("invented out of impatience")
- Montagem rapida no closer (4 drinks em sequencia)

### Beat 1 — Title Card (animacao de abertura)

```css
/* O cutout PNG escala de 0 para 1 */
@keyframes cutoutEntry {
  0%   { transform: scale(0) rotate(0deg); opacity: 0; }
  60%  { transform: scale(1.05) rotate(-2deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}

/* O nome rotaciona para posicao final */
@keyframes nameEntry {
  0%   { transform: rotate(0deg) scale(0); opacity: 0; }
  100% { transform: rotate(-15deg) scale(1); opacity: 1; }
}

/* Apos 2s: tudo encolhe pro canto (morph pra badge) */
@keyframes morphToBadge {
  0%   { transform: scale(1); top: 50%; left: 50%; }
  100% { transform: scale(0.15); top: 5%; left: 5%; }
}

.cutout   { animation: cutoutEntry 0.6s ease-out forwards; }
.name     { animation: nameEntry 0.4s ease-out 0.4s forwards; }
.morph    { animation: morphToBadge 0.8s ease-in-out 2s forwards; }
```

**O que o editor ve**: O cutout de espresso aparece grande no centro com um leve bounce. O nome "ESPRESSO" rotaciona pra posicao. Depois de 2 segundos, tudo encolhe pro canto e vira o badge. A primeira imagem de B-roll escala de 80% pra 100%.

### Beat 3 — Processo tecnico (9 bars)

```css
/* Imagem da maquina de espresso entra com scale */
@keyframes espressoMachine {
  from { transform: scale(0.7); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

/* Dado "9 BARS" entra com slam (overshoot) */
@keyframes slamData {
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.2); opacity: 1; }
  80%  { transform: scale(0.95); }
  100% { transform: scale(1); }
}

/* Analogia "90m" aparece com fade + slide up */
@keyframes analogyEntry {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.machine { animation: espressoMachine 0.4s ease-out forwards; }
.data    { animation: slamData 0.3s ease-out 2s forwards; }
.analogy { animation: analogyEntry 0.5s ease-out 3s forwards; }
```

**O que o editor ve**: Foto da extracao aparece com scale-in. No "9 bars", o numero entra com slam (aparece grande, encolhe pra tamanho final). No "90 meters underwater", o infografico sobe suavemente. Os 3 momentos sao sequenciados: maquina (0s) → dado (2s) → analogia (3s).

### Beat 4 — Comparacao de cremas (stagger)

```css
/* 3 fotos de crema entram em stagger */
@keyframes cremaEntry {
  from { transform: scale(0.8); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

/* Labels aparecem apos a foto */
@keyframes labelPop {
  0%   { transform: scale(0); }
  70%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.crema-1 { animation: cremaEntry 0.3s ease-out 0.0s forwards; }
.crema-2 { animation: cremaEntry 0.3s ease-out 0.3s forwards; }
.crema-3 { animation: cremaEntry 0.3s ease-out 0.6s forwards; }

.label-1 { animation: labelPop 0.2s ease-out 0.5s forwards; }  /* TOO FAST */
.label-2 { animation: labelPop 0.2s ease-out 0.8s forwards; }  /* PERFECT */
.label-3 { animation: labelPop 0.2s ease-out 1.1s forwards; }  /* BURNED */
```

**O que o editor ve**: Tres fotos de crema entram uma por uma (stagger de 0.3s). Depois cada label aparece com pop. A sequencia inteira leva 1.3s. O editor entende que precisa de 3 cortes rapidos sincronizados com a narracao.

### Beat 5 — Micro-beat ("invented out of impatience")

```css
/* A foto historica entra normalmente */
@keyframes historicEntry {
  from { transform: scale(0.8); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

/* O texto do micro-beat tem DELAY maior (pausa dramatica) */
@keyframes punchlineEntry {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.historic  { animation: historicEntry 0.4s ease-out forwards; }

/* Note o delay de 5s — a frase so aparece no final do beat */
.punchline { animation: punchlineEntry 0.8s ease-in 5s forwards; }
```

**O que o editor ve**: A foto historica aparece imediatamente. Mas o texto "INVENTED OUT OF IMPATIENCE" so aparece 5 segundos depois — com um fade lento. Essa pausa e a DRAMATICA. O editor entende que precisa deixar a narracao respirar antes de revelar o texto.

### Beat 6 — Montagem rapida (closer)

```css
/* 4 fotos em sequencia ultra-rapida */
@keyframes quickFlash {
  0%   { opacity: 0; transform: scale(0.9); }
  20%  { opacity: 1; transform: scale(1); }
  80%  { opacity: 1; transform: scale(1); }
  100% { opacity: 0; }
}

.drink-1 { animation: quickFlash 1.5s ease-out 0.0s forwards; } /* latte */
.drink-2 { animation: quickFlash 1.5s ease-out 1.5s forwards; } /* cappuccino */
.drink-3 { animation: quickFlash 1.5s ease-out 3.0s forwards; } /* americano */
.drink-4 { animation: quickFlash 1.5s ease-out 4.5s forwards; } /* espresso */

/* Texto final aparece solido, sem bounce */
@keyframes closerText {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.closer { animation: closerText 0.5s ease-in 6s forwards; }
```

**O que o editor ve**: 4 drinks passam em sequencia rapida (1.5s cada), depois o texto "WITHOUT THIS, NONE OF THEM EXIST" aparece com fade solido. O ritmo e rapido → pausa → peso.

### Play All

O "Play All" sequencia todos os beats:

```javascript
const beatTimings = [
  { beat: 1, startAt: 0,    duration: 4000  },  // title card
  { beat: 2, startAt: 4000, duration: 4000  },  // misconception
  { beat: 3, startAt: 8000, duration: 8000  },  // 9 bars
  { beat: 4, startAt: 16000, duration: 10000 }, // crema
  { beat: 5, startAt: 26000, duration: 10000 }, // Bezzera
  { beat: 6, startAt: 36000, duration: 8000  }, // closer
];
// Total: 44s de animacao (vs ~60s de narracao real — o animatic e comprimido)
```

---

## Dicas de Iteracao

### Ajustar timing de animacao especifica

```
No storyboard V3 do Espresso:

Beat 5 — o delay do texto "INVENTED OUT OF IMPATIENCE" 
ta em 5s mas precisa ser 6.5s. A narracao e mais longa 
do que eu estimei. Ajusta so esse delay.
```

### Mudar tipo de animacao de um beat

```
No storyboard V3 do Espresso:

Beat 3 — troca o slam do "9 BARS" por um fade simples. 
O overshoot ta muito agressivo pra esse momento que e 
mais tecnico que dramatico.
```

### Ajustar stagger entre elementos

```
No storyboard V3 do Espresso:

Beat 4 — as 3 cremas entram rapido demais (stagger 0.3s).
Muda pra stagger de 0.6s — o espectador precisa de tempo 
pra registrar cada crema antes da proxima.
```

### Adicionar pausa dramatica a um beat

```
No storyboard V3 do Espresso:

Beat 6 — adiciona 1.5s de pausa (delay) antes do texto 
"WITHOUT THIS, NONE OF THEM EXIST". A frase precisa de 
um silencio visual antes de aparecer.
```

---

## ECONOMIA DE TOKENS — REGRAS DE OURO

1. **Nunca gere o storyboard inteiro de uma vez.** Gere item por item. Um catalogo de 8 itens = 8 geracoes, nao 1.

2. **Valide a estrutura (V1) antes de adicionar visuais (V2/V3).** Se o beat 3 esta no lugar errado, e mais barato mover no V1 do que regenerar V3 com SVGs e animacoes.

3. **Peca ajustes cirurgicos.** "No beat 5 do Espresso, muda o delay do punchline de 5s pra 6.5s" e 20x mais barato que "refaz o item 1 inteiro em V3".

4. **Use o roteiro .md como source of truth.** Se mudar algo no roteiro, regenera so o item afetado no storyboard — nao todos.

5. **Pra catalogos grandes (20+ itens), gere em blocos de 5 itens.** Isso mantem o contexto sem estourar a janela. Valide cada bloco antes de ir pro proximo.
