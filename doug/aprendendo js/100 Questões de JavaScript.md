# 100 Questões de JavaScript

## Do nível iniciante ao intermédio

Este ficheiro contém **100 questões**, organizadas em **20 temas**, com **5 questões por tema**. A sequência progride dos fundamentos para conceitos intermédios.

## Índice de temas

| Bloco | Tema | Questões |
|---:|---|---:|
| 1 | Variáveis e constantes | 1–5 |
| 2 | Tipos de dados | 6–10 |
| 3 | Operadores | 11–15 |
| 4 | Conversão e coerção de tipos | 16–20 |
| 5 | Condicionais | 21–25 |
| 6 | Ciclos de repetição | 26–30 |
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

1. O que é uma variável em JavaScript e para que serve?
2. Qual é a diferença entre declarar uma variável com `let` e com `const`?
3. Em que situações se deve utilizar `const` em vez de `let`?
4. O que acontece quando se tenta alterar o valor de uma constante declarada com `const`?
5. Qual é o resultado e a diferença entre as declarações `var nome = "Ana"`, `let nome = "Ana"` e `const nome = "Ana"`?

## Bloco 2 — Tipos de dados

6. Quais são os principais tipos de dados primitivos existentes em JavaScript?
7. Qual é a diferença entre os valores `null` e `undefined`?
8. Que tipo de dado é devolvido por `typeof "JavaScript"`?
9. Que tipo de dado representa o valor `true` ou `false`?
10. O que significa dizer que JavaScript é uma linguagem de tipagem dinâmica?

## Bloco 3 — Operadores

11. Qual é a diferença entre os operadores `=` e `==`?
12. Qual é a diferença entre `==` e `===`?
13. Para que servem os operadores aritméticos `+`, `-`, `*`, `/` e `%`?
14. O que fazem os operadores lógicos `&&`, `||` e `!`?
15. Qual é o resultado da expressão `10 > 5 && 3 === 3`? Explique o motivo.

## Bloco 4 — Conversão e coerção de tipos

16. Como converter uma string para um número inteiro utilizando JavaScript?
17. Qual é a diferença entre `Number("10")`, `parseInt("10")` e `parseFloat("10.5")`?
18. Como converter um número para uma string?
19. O que acontece quando se utiliza `Number("abc")`?
20. Qual é o resultado de `"5" + 2` e por que é diferente de `"5" - 2`?

## Bloco 5 — Condicionais

21. Para que serve a estrutura `if`?
22. Como funciona uma estrutura `if...else`?
23. Quando é mais adequado utilizar `switch` em vez de vários blocos `if...else`?
24. O que é o operador ternário e como pode substituir uma condição simples?
25. Escreva uma condição que mostre a mensagem `Aprovado` quando uma variável `nota` for maior ou igual a 10 e `Reprovado` caso contrário.

## Bloco 6 — Ciclos de repetição

26. Qual é a finalidade de um ciclo `for`?
27. Qual é a diferença entre os ciclos `while` e `do...while`?
28. Para que servem as instruções `break` e `continue` dentro de um ciclo?
29. Quantas vezes será executado o código dentro de `for (let i = 0; i < 5; i++)`?
30. Como percorrer todos os elementos de um array utilizando um ciclo `for...of`?

## Bloco 7 — Funções

31. O que é uma função e qual é a vantagem de utilizar funções num programa?
32. Qual é a diferença entre declarar uma função e invocar uma função?
33. Para que serve a instrução `return`?
34. O que acontece quando uma função não possui uma instrução `return` explícita?
35. Crie uma função chamada `calcularMedia` que receba dois números e devolva a média entre eles.

## Bloco 8 — Arrow functions e escopo

36. Como escrever a função `dobro` utilizando uma arrow function?
37. Qual é a diferença sintática entre uma função tradicional e uma arrow function?
38. O que significa escopo de uma variável?
39. Qual é a diferença entre escopo global, escopo de função e escopo de bloco?
40. O que é uma função callback e em que situação pode ser utilizada?

## Bloco 9 — Arrays

41. O que é um array e para que serve?
42. Como criar um array com os valores `"azul"`, `"verde"` e `"vermelho"`?
43. Como aceder ao primeiro elemento de um array chamado `cores`?
44. Como descobrir o número de elementos existentes num array?
45. Qual é a diferença entre `push`, `pop`, `shift` e `unshift`?

## Bloco 10 — Métodos de arrays

46. Para que servem os métodos `map`, `filter` e `reduce`?
47. Escreva uma expressão que crie um novo array com o dobro dos valores de `[1, 2, 3, 4]` utilizando `map`.
48. Como obter apenas os números pares de um array utilizando `filter`?
49. Como somar todos os números de um array utilizando `reduce`?
50. Qual é a diferença entre `forEach` e `map`?

## Bloco 11 — Objetos

51. O que é um objeto em JavaScript?
52. Como criar um objeto `pessoa` com as propriedades `nome` e `idade`?
53. Qual é a diferença entre aceder a uma propriedade através de `pessoa.nome` e `pessoa["nome"]`?
54. Como adicionar ou alterar uma propriedade de um objeto depois de este ter sido criado?
55. Para que servem `Object.keys()`, `Object.values()` e `Object.entries()`?

## Bloco 12 — Strings

56. Como obter o número de caracteres de uma string?
57. Qual é a diferença entre `toUpperCase()` e `toLowerCase()`?
58. Como verificar se uma string contém uma determinada palavra?
59. Para que servem os métodos `slice`, `substring` e `split`?
60. O que são template literals e como inserir uma variável dentro de uma string utilizando este recurso?

## Bloco 13 — Datas e números

61. Como criar um objeto que represente a data e hora atuais?
62. Para que servem os métodos `getFullYear()`, `getMonth()` e `getDate()`?
63. Como gerar um número aleatório entre 0 e 1?
64. Como arredondar um número para baixo, para cima e para o inteiro mais próximo?
65. Como gerar um número inteiro aleatório entre 1 e 10?

## Bloco 14 — DOM

66. O que significa DOM?
67. Como selecionar um elemento HTML pelo seu `id` utilizando JavaScript?
68. Qual é a diferença entre `querySelector()` e `querySelectorAll()`?
69. Como alterar o texto de um elemento selecionado no DOM?
70. Como alterar uma classe CSS de um elemento utilizando `classList`?

## Bloco 15 — Eventos

71. O que é um evento numa página web?
72. Como adicionar um evento de clique a um botão utilizando `addEventListener()`?
73. Qual é a função do objeto `event` recebido por um listener?
74. Qual é a diferença entre os eventos `click`, `mouseover` e `keydown`?
75. Para que serve o método `preventDefault()`?

## Bloco 16 — Formulários e validação

76. Como obter o valor introduzido num campo de texto de um formulário?
77. Como impedir que um formulário seja enviado automaticamente para o servidor?
78. Como verificar se um campo está vazio depois de remover espaços no início e no fim?
79. Como validar se um valor é um número utilizando JavaScript?
80. Por que motivo a validação de dados deve ser feita tanto no navegador como no servidor?

## Bloco 17 — JSON e armazenamento

81. O que é JSON e para que é normalmente utilizado?
82. Qual é a diferença entre `JSON.stringify()` e `JSON.parse()`?
83. Como converter um objeto JavaScript num texto JSON?
84. Qual é a diferença entre `localStorage` e `sessionStorage`?
85. Como guardar e depois recuperar um valor no `localStorage`?

## Bloco 18 — Programação assíncrona

86. O que significa executar código de forma assíncrona?
87. Para que serve a função `setTimeout()`?
88. O que é uma Promise?
89. Qual é a finalidade das palavras-chave `async` e `await`?
90. Como tratar uma falha numa operação assíncrona utilizando `try...catch`?

## Bloco 19 — Tratamento de erros e depuração

91. Para que serve `console.log()` durante a depuração de um programa?
92. Qual é a diferença entre um erro de sintaxe e um erro de execução?
93. Como utilizar `try...catch` para evitar que um erro interrompa inesperadamente o programa?
94. Para que serve a instrução `throw new Error()`?
95. Que informações devem ser analisadas na consola do navegador quando um programa não funciona como esperado?

## Bloco 20 — Classes, módulos e boas práticas

96. O que é uma classe em JavaScript?
97. Qual é a função do método `constructor` numa classe?
98. Como criar uma classe `Pessoa` com uma propriedade `nome` e um método `apresentar`?
99. Para que servem as instruções `export` e `import`?
100. Indique três boas práticas para escrever código JavaScript mais legível, seguro e fácil de manter.

