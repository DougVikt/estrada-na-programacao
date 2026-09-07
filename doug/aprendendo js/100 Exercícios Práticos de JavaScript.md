# 100 Exercícios Práticos de JavaScript

## Nível iniciante ao intermédio

Neste ficheiro, cada questão exige uma **resposta escrita em código JavaScript**. Evita responder apenas com explicações. Quando necessário, utiliza `console.log()` para apresentar os resultados.

## Organização

| Bloco | Tema | Questões |
|---:|---|---:|
| 1 | Variáveis e constantes | 1–5 |
| 2 | Tipos de dados | 6–10 |
| 3 | Operadores | 11–15 |
| 4 | Conversão de tipos | 16–20 |
| 5 | Condicionais | 21–25 |
| 6 | Ciclos | 26–30 |
| 7 | Funções | 31–35 |
| 8 | Arrow functions e escopo | 36–40 |
| 9 | Arrays | 41–45 |
| 10 | Métodos de arrays | 46–50 |
| 11 | Objetos | 51–55 |
| 12 | Strings | 56–60 |
| 13 | Datas e números | 61–65 |
| 14 | DOM | 66–70 |
| 15 | Eventos | 71–75 |
| 16 | Formulários e validação | 76–80 |
| 17 | JSON e armazenamento | 81–85 |
| 18 | Programação assíncrona | 86–90 |
| 19 | Tratamento de erros e depuração | 91–95 |
| 20 | Classes, módulos e boas práticas | 96–100 |

---

## Bloco 1 — Variáveis e constantes

1. Declara uma variável chamada `nome`, atribui-lhe o teu nome e apresenta o valor na consola.
2. Declara duas variáveis, `idade` e `cidade`, e apresenta uma frase com os dois valores.
3. Declara uma constante `PI` com o valor `3.14159` e calcula a área de um círculo com raio `5`.
4. Cria duas variáveis numéricas, troca os valores entre elas e apresenta o resultado.
5. Declara variáveis para armazenar o nome de um produto, o preço e a quantidade. Calcula e apresenta o valor total da compra.

## Bloco 2 — Tipos de dados

6. Cria uma variável de cada tipo primitivo: string, number, boolean, undefined, null, bigint e symbol. Apresenta o tipo de cada uma.
7. Cria uma variável `estaChovendo` com um valor booleano e apresenta uma mensagem diferente para `true` e `false`.
8. Cria uma variável sem valor atribuído e verifica, através de código, se o seu valor é `undefined`.
9. Cria um array com três nomes e um objeto que represente uma pessoa. Apresenta os tipos de dados dessas estruturas.
10. Cria uma variável com o valor `null` e escreve uma condição que verifique se ela está vazia.

## Bloco 3 — Operadores

11. Cria duas variáveis e apresenta o resultado da soma, subtração, multiplicação, divisão e resto da divisão entre elas.
12. Cria uma variável `idade` e verifica com operadores de comparação se a pessoa é maior ou igual a 18 anos.
13. Cria três valores booleanos e combina-os utilizando os operadores `&&`, `||` e `!`.
14. Calcula o preço final de um produto de 100 euros após aplicar um desconto de 15%.
15. Verifica se um número é simultaneamente positivo e par, utilizando operadores aritméticos, relacionais e lógicos.

## Bloco 4 — Conversão de tipos

16. Converte a string `"42"` para número e soma-lhe o valor `8`.
17. Recebe o valor `"19.95"`, converte-o para número decimal e apresenta o resultado com duas casas decimais.
18. Converte o número `2026` para string e concatena-o com o texto `" é o ano atual"`.
19. Converte a string `"123abc"` utilizando `parseInt()` e `Number()`. Apresenta e compara os resultados.
20. Cria um programa que receba uma idade em formato de texto, converta-a para número e indique se a pessoa pode votar, considerando a idade mínima de 18 anos.

## Bloco 5 — Condicionais

21. Cria uma condição que apresente `Positivo`, `Negativo` ou `Zero` conforme o valor de uma variável numérica.
22. Verifica se uma nota está entre 0 e 20 e apresenta `Aprovado` para notas iguais ou superiores a 10; caso contrário, apresenta `Reprovado`.
23. Utiliza `if...else if...else` para classificar uma idade como criança, adolescente, adulto ou sénior.
24. Utiliza o operador ternário para indicar se uma pessoa pode conduzir com base na idade.
25. Cria um `switch` que receba um número de 1 a 7 e apresente o dia da semana correspondente.

## Bloco 6 — Ciclos

26. Utiliza um ciclo `for` para apresentar os números de 1 a 10.
27. Utiliza um ciclo `while` para apresentar todos os números pares entre 2 e 20.
28. Utiliza um ciclo `do...while` para apresentar uma contagem decrescente de 5 até 1.
29. Calcula a soma de todos os números inteiros entre 1 e 100 utilizando um ciclo.
30. Percorre um array de nomes com `for...of` e apresenta cada nome acompanhado da mensagem `Olá`.

## Bloco 7 — Funções

31. Cria uma função `saudacao` que receba um nome e devolva uma mensagem de boas-vindas.
32. Cria uma função `somar` que receba dois números e devolva a soma.
33. Cria uma função `calcularMedia` que receba três notas e devolva a média.
34. Cria uma função `ehPar` que receba um número e devolva `true` se for par ou `false` se for ímpar.
35. Cria uma função `calcularFatorial` que receba um número inteiro positivo e devolva o seu fatorial.

## Bloco 8 — Arrow functions e escopo

36. Reescreve uma função tradicional que duplica um número como uma arrow function.
37. Cria uma arrow function `maiorNumero` que receba dois números e devolva o maior.
38. Cria uma função que tenha uma variável local chamada `mensagem` e demonstra, com código, que ela não pode ser acedida fora da função.
39. Declara uma variável global e uma variável dentro de um bloco `if`. Demonstra a diferença de escopo entre elas.
40. Cria uma função que receba outra função como argumento e a execute. Utiliza-a para calcular o quadrado de um número.

## Bloco 9 — Arrays

41. Cria um array com cinco frutas e apresenta o primeiro, o terceiro e o último elemento.
42. Adiciona uma nova cidade ao fim de um array e remove o primeiro elemento.
43. Cria um array de números e calcula o seu tamanho sem contar manualmente os elementos.
44. Inverte a ordem dos elementos de um array e apresenta o resultado.
45. Cria uma cópia de um array e altera a cópia sem modificar o array original.

## Bloco 10 — Métodos de arrays

46. Utiliza `map()` para criar um novo array com o dobro dos valores de `[1, 2, 3, 4, 5]`.
47. Utiliza `filter()` para obter apenas os números pares de `[3, 8, 11, 14, 20, 25]`.
48. Utiliza `reduce()` para calcular a soma dos valores de `[10, 20, 30, 40]`.
49. Utiliza `find()` para encontrar o primeiro número superior a 50 num array.
50. Utiliza `sort()` para ordenar numericamente, por ordem crescente, o array `[10, 2, 30, 5, 1]`.

## Bloco 11 — Objetos

51. Cria um objeto `livro` com as propriedades `titulo`, `autor` e `paginas`, e apresenta os seus valores.
52. Adiciona uma propriedade `disponivel` a um objeto que já tenha sido criado.
53. Cria uma função que receba um objeto `pessoa` e apresente uma frase com o nome e a idade.
54. Cria um objeto `produto` e calcula o preço final após aplicar uma percentagem de desconto armazenada noutra propriedade.
55. Percorre todas as propriedades e valores de um objeto utilizando `Object.entries()`.

## Bloco 12 — Strings

56. Cria uma string e apresenta o número de caracteres que ela contém.
57. Converte uma frase para letras maiúsculas e depois para letras minúsculas.
58. Verifica se uma frase contém a palavra `JavaScript`, ignorando diferenças entre maiúsculas e minúsculas.
59. Divide a frase `"HTML CSS JavaScript"` num array de palavras utilizando `split()`.
60. Utiliza template literals para criar uma frase com as variáveis `nome`, `idade` e `profissao`.

## Bloco 13 — Datas e números

61. Cria um objeto `Date` com a data e hora atuais e apresenta o ano, mês e dia.
62. Cria uma data de aniversário e calcula aproximadamente a idade de uma pessoa.
63. Gera um número inteiro aleatório entre 1 e 100.
64. Apresenta o valor de `12.6789` arredondado para baixo, para cima e para o inteiro mais próximo.
65. Cria uma função que receba um array de números e devolva o maior e o menor valor utilizando `Math.max()` e `Math.min()`.

## Bloco 14 — DOM

66. Cria uma página HTML com um título e altera o seu texto utilizando `getElementById()`.
67. Seleciona todos os elementos com a classe `.item` utilizando `querySelectorAll()` e altera a cor do texto de cada um.
68. Cria um botão que, ao ser selecionado, altere o conteúdo de um parágrafo.
69. Adiciona e remove uma classe CSS de um elemento utilizando `classList.add()` e `classList.remove()`.
70. Cria um elemento `li` com JavaScript, define o seu texto e adiciona-o a uma lista existente no DOM.

## Bloco 15 — Eventos

71. Adiciona um evento de clique a um botão que apresente uma mensagem na consola.
72. Cria um contador que aumente uma unidade sempre que o utilizador clicar num botão.
73. Adiciona um evento `mouseover` que altere a cor de um elemento e um evento `mouseout` que restaure a cor original.
74. Cria um campo de texto que apresente na consola cada tecla pressionada pelo utilizador através do evento `keydown`.
75. Adiciona um evento ao documento que altere o texto de um elemento quando o utilizador clicar duas vezes nele.

## Bloco 16 — Formulários e validação

76. Cria um formulário com nome e email e apresenta na consola os valores submetidos.
77. Impede o comportamento padrão de envio de um formulário utilizando `preventDefault()`.
78. Valida um campo de nome e apresenta uma mensagem de erro se estiver vazio.
79. Valida um email através de uma expressão regular simples e apresenta uma mensagem adequada.
80. Cria um formulário com idade e impede o envio caso o valor não seja um número entre 0 e 120.

## Bloco 17 — JSON e armazenamento

81. Converte um objeto `utilizador` para uma string JSON utilizando `JSON.stringify()`.
82. Converte uma string JSON para um objeto JavaScript utilizando `JSON.parse()`.
83. Guarda um objeto de preferências no `localStorage` e recupera-o posteriormente.
84. Cria um contador que seja mantido no `localStorage` mesmo depois de atualizar a página.
85. Guarda uma lista de tarefas em JSON no `localStorage`, adiciona uma nova tarefa e volta a guardar a lista atualizada.

## Bloco 18 — Programação assíncrona

86. Utiliza `setTimeout()` para apresentar uma mensagem na consola após dois segundos.
87. Cria uma Promise que seja resolvida após um segundo com a mensagem `Concluído`.
88. Utiliza `.then()` e `.catch()` para tratar o sucesso ou erro de uma Promise.
89. Cria uma função `async` que utilize `await` para esperar pelo resultado de uma Promise.
90. Utiliza `fetch()` para obter dados de uma API pública e apresenta os resultados na consola através de `async/await`.

## Bloco 19 — Tratamento de erros e depuração

91. Cria uma função que lance um erro quando receber um número negativo.
92. Utiliza `try...catch` para tentar converter uma string inválida num objeto JSON e apresentar uma mensagem de erro.
93. Cria uma função que tente aceder a uma propriedade obrigatória de um objeto e lance um erro caso ela não exista.
94. Utiliza `console.log()`, `console.warn()` e `console.error()` para registar diferentes tipos de mensagens durante a execução.
95. Corrige um ciclo infinito criado com `while` e explica a correção através de comentários no código.

## Bloco 20 — Classes, módulos e boas práticas

96. Cria uma classe `Pessoa` com as propriedades `nome` e `idade`, definidas no `constructor`.
97. Adiciona à classe `Pessoa` um método `apresentar()` que devolva uma frase com os dados da pessoa.
98. Cria uma classe `ContaBancaria` com métodos para depositar, levantar dinheiro e consultar o saldo.
99. Cria dois ficheiros JavaScript: num deles exporta uma função e, no outro, importa-a e utiliza-a.
100. Cria um pequeno programa que utilize funções, constantes, arrays e objetos, evitando variáveis globais desnecessárias e mantendo nomes de variáveis claros.

---

## Instruções gerais

Todas as respostas devem ser apresentadas como código JavaScript. Nos exercícios relacionados com DOM, eventos e formulários, podes criar um ficheiro HTML com uma tag `<script>` ou utilizar um ficheiro JavaScript ligado a uma página HTML.

**Autor:** Manus AI
