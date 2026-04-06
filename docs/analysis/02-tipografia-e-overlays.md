# 02 - Tipografia e Overlays

## Sistema Tipografico

O video usa um unico estilo tipografico dominante: **fonte manuscrita/marker** (estilo hand-drawn, similar a "Permanent Marker", "Luckiest Guy" ou "Bangers"). Nao ha fontes serifadas ou sans-serif tradicionais.

### Hierarquia Visual dos Textos

#### Nivel 1 — Title Card (nome do item)
- **Fonte**: Manuscrita/marker, bold
- **Cor**: Preto (#000)
- **Tamanho**: Grande (~15-20% da altura da tela)
- **Posicao**: Centro-inferior ou centro-direita, rotacionado ~15-20 graus
- **Duracao**: ~2-3 segundos
- **Exemplo**: "NEAPOLITAN PIZZA", "ROMAN PIZZA"
- **Caixa**: ALL CAPS

#### Nivel 2 — Badge Persistente (identificador do item)
- **Fonte**: Mesma manuscrita, peso regular/bold
- **Cor**: Branco sobre fundo escuro (azul-marinho/teal)
- **Tamanho**: Pequeno (~3-4% da altura da tela)
- **Posicao**: Canto superior esquerdo, fixo
- **Duracao**: Permanente durante toda a secao do item
- **Formato**: Pill/capsula com icone circular a esquerda
- **Caixa**: ALL CAPS
- **Exemplos**: "Neapolitan Pizza", "NEW YORK STYLE", "CHICAGO DEEP DISH", "TURKISH PIZZA", "PANEER TIKKA", "DETROIT STYLE", "COLORADO STYLE"

#### Nivel 3 — Texto de Conteudo/Dados
- **Fonte**: Mesma manuscrita
- **Cor**: Preto (#000), com palavras-chave em vermelho (#E53E3E)
- **Tamanho**: Medio (~5-8% da altura da tela)
- **Posicao**: Variavel — sobre quadro de apresentacao, ao lado de imagens, ou centro
- **Duracao**: ~3-5 segundos, aparece incrementalmente
- **Exemplos**: "STRICT RULES", "MUST HAVE A RAISED EDGE", "MINCED MEAT TOMATOES", "Bakers"
- **Caixa**: Mista — titulos em ALL CAPS, descricoes em mixed case

#### Nivel 4 — Texto Comparativo
- **Fonte**: Mesma manuscrita, bold
- **Cor**: Preto
- **Tamanho**: Medio-grande
- **Posicao**: Entre duas imagens comparativas
- **Simbolos**: Usa ">" como indicador de comparacao
- **Exemplo**: "CRISPIER >"

## Overlays Recorrentes

### Badge do Item (overlay principal)
- Formato: **pill/capsula** com bordas totalmente arredondadas
- Fundo: Azul-marinho escuro (#1A365D a #2C3E50)
- Borda: Sutil, levemente mais clara
- Icone: Circulo com mini-imagem do alimento (fatia de pizza, pizza quadrada, etc.) no lado esquerdo
- O icone muda para cada tipo de pizza, refletindo o formato do item
- Sempre no canto superior esquerdo

### Balao de Fala (speech bubble)
- Estilo: Hand-drawn, contorno preto grosso
- Texto dentro: Fonte manuscrita, ALL CAPS
- Usado para conceitos-chave ou citacoes
- Exemplo: "PIZZA" em balao ao lado do mapa-mundi

### Quadro de Apresentacao (flip chart)
- Retangulo com borda fina preta
- Pe/suporte na parte inferior
- Conteudo aparece incrementalmente (linha por linha)
- Titulo em vermelho, itens em preto

## Padroes de Entrada/Saida do Texto

| Tipo | Entrada | Saida |
|------|---------|-------|
| Title Card | Scale-in + rotacao (aparece grande, rotacionado) | Shrink para badge no canto (transicao suave) |
| Badge | Slide-in da esquerda ou fade-in | Fade-out quando muda de item |
| Texto de dados | Aparece letra por letra ou pop-in instantaneo | Corte seco |
| Texto comparativo | Pop-in rapido | Corte seco com mudanca de cena |
| Ingredientes | Pop-in sequencial (item por item) | Corte seco |

## Observacoes Importantes
- Nao ha sombras nos textos (drop shadow)
- Nao ha outlines/strokes nos textos (exceto nos baloes de fala)
- O estilo hand-drawn e 100% consistente — nunca aparece uma fonte "limpa"
- O vermelho e usado com parcimonia: apenas palavras-chave que precisam de destaque
- A rotacao no title card cria dinamismo visual em uma composicao que seria estatica
