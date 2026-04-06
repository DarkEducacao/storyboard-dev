# 04 - Transicoes e Movimento

## Tipos de Transicao Identificados

### 1. Corte Seco (mais frequente — ~70% das transicoes)
- Usado entre clips de B-roll dentro do mesmo item
- Troca instantanea de uma imagem para outra
- O badge permanece fixo, criando continuidade
- Exemplo: entre fotos diferentes de Neapolitan Pizza

### 2. Scale-In / Zoom-In de Entrada
- Imagens/fotos aparecem **escalando de pequeno para tamanho final**
- Visivel em varios cut frames onde a imagem esta menor que a posicao final
- Duracao estimada: ~0.3-0.5 segundos
- Aplicado a praticamente toda imagem que entra em cena
- Exemplos: cut-00m01s (imagem ainda crescendo), frame-0002 (imagem posicionada)

### 3. Fade/Dissolve para Branco (transicao entre itens)
- Usado na mudanca de um tipo de pizza para outro
- A tela fica momentaneamente branca (ou quase branca)
- Visivel em cut-01m01s, cut-01m23s, cut-02m01s — frames quase totalmente brancos
- Duracao estimada: ~0.5-1.0 segundo
- Funciona como "respiro" visual entre secoes

### 4. Title Card → Badge (transicao de abertura)
- O title card grande (cutout PNG + texto rotacionado) **encolhe e se reposiciona**
- Transforma-se no badge pequeno no canto superior esquerdo
- A imagem cutout vira o icone circular do badge
- O texto se condensa na pill
- Duracao estimada: ~1-1.5 segundos
- Esta e a transicao mais sofisticada e identitaria do formato

### 5. Pop-In de Elementos
- Textos, icones e overlays aparecem com **pop/bounce instantaneo**
- Sem slide — o elemento simplesmente "aparece" na posicao final
- Possivelmente com leve overshoot (bounce) no scale
- Usado para: textos de dados, ingredientes, baloes de fala, mapas

### 6. Slide-In Lateral (raro)
- Alguns elementos (mapas, silhuetas) entram pela lateral
- Visivel no frame-0007: mapa das Americas entrando pela esquerda
- Menos frequente que os pop-ins

## Frequencia por Tipo

| Tipo | Frequencia | Uso |
|------|-----------|-----|
| Corte seco | ~70% | Entre B-rolls do mesmo item |
| Scale-in | ~80% dos elementos | Toda imagem nova que entra |
| Fade branco | ~8 vezes | Transicao entre itens do catalogo |
| Title→Badge | ~8 vezes | Abertura de cada item |
| Pop-in | ~60% dos textos | Textos e overlays |
| Slide lateral | ~5% | Mapas e elementos contextuais |

## Movimento de Camera

### Nao ha movimento de camera real
- Todo o video e composicao em **motion graphics**
- Nao existe pan, tilt ou tracking de camera
- O que existe e **movimento de ELEMENTOS** dentro do frame fixo

### Movimentos de Elementos Observados
1. **Scale (zoom)**: Imagens crescem/encolhem ao entrar/sair
2. **Posicao**: Elementos podem se deslocar lateralmente (slide)
3. **Rotacao**: Presente nos title cards (texto rotacionado ~15-20 graus)
4. **Ken Burns suave**: Possivel leve zoom/pan em fotos estaticas para dar vida (nao confirmado com certeza nos frames estaticos, mas provavel)

## Transicao Entre Itens do Catalogo — Sequencia Completa

```
[ITEM ATUAL - ultimas imagens de B-roll]
    ↓ fade para branco (~0.5s)
[TELA BRANCA momentanea]
    ↓ fade-in do title card (~0.3s)
[TITLE CARD - cutout PNG grande + nome rotacionado (~2-3s)]
    ↓ shrink/morph animado (~1s)
[BADGE no canto + primeira imagem de B-roll scale-in]
    ↓ cortes secos entre B-rolls
[SEQUENCIA DE B-ROLLS do novo item]
```

## Observacoes Tecnicas
- Nao ha wipes, slides de pagina, ou transicoes "fantasiosas"
- A linguagem visual e **clean e moderna**: corte seco domina
- O unico momento "elaborado" e o title card → badge morph
- A consistencia das transicoes e o que cria o padrao reconhecivel do formato
- Os fades brancos entre secoes sao cruciais: sinalizam "novo item" sem ser abrupto
