// primeiro hello world 
console.log("Hello World !")
console.log("-------------------------------------");
// ------------- USANDO VARIAVEIS ----------------

/*
 var = originalmente usado para declarar as variaveis  , mas tem um problema o usa atualmente 
        ela permite a redeclaração da variavel podendo causar erro no codigo 
 let = usada atualmente para declarar variaveis , por ser mais atual , ela impede declarar a 
        variavel mais de uma vez 
*/
var nomep = "doug";
let sobrenome = "vikt";

console.log(nomep ,sobrenome);

// alterando os valores das variaveis

let preco = 120;
console.log("preço original :",preco);
preco = 120 - 40;
console.log("retirou 40 :",preco);

console.log("-------------------------------------");
//=================== EXERCICIOS ============================
// Bloco 1 — Variáveis e constantes
// 1. Declara uma variável chamada `nome`, atribui-lhe o teu nome e apresenta o valor na consola.
let nome = "doug";
console.log("valor da variavel nome:", nome);

console.log("-------------------------------------");
// 2. Declara duas variáveis, `idade` e `cidade`, e apresenta uma frase com os dois valores.
let idade = 200 , cidade = "recife";
console.log(`A cidade de ${cidade} tem ${idade} anos`);

console.log("-------------------------------------");
// 3. Declara uma constante `PI` com o valor `3.14159` e calcula a área de um círculo com raio `5`.
const PI = 3.14159;
let area = PI*(5**2);
console.log(`area do circulo com 5 m de raio e : ${area}m²`);


console.log("-------------------------------------");
// 4. Cria duas variáveis numéricas, troca os valores entre elas e apresenta o resultado.
let numero1 = 45 , numero2 = 787;
console.log(`trocando valores n1 = ${numero1} , n2 = ${numero2}`);

numero1 = numero1 + numero2;
numero2 = numero1 - numero2;
numero1 = numero1 - numero2;
console.log(`trocados n1 = ${numero1} , n2 = ${numero2}`);
/* 
DE OUTRA FORMA :
[numero1 , numero2] = [numero2 ,numero1];
*/

console.log("-------------------------------------");
// 5. Declara variáveis para armazenar o nome de um produto, o preço e a quantidade. Calcula e apresenta o valor total da compra.  
// dicionario de produtos
let produtos = {
       "teclado":{
              "preco":25,
              "quant":360,
       },
       "mouse":{
              "preco":14,
              "quant":543
       }
}
console.log("Fernanada comprou 30 teclados e 30 mouses ");
let venda= 30; // como ambos itens tem o mesmo valor so uma varialvel para os 2

let compraProduto = produtos.teclado.preco * venda; // puxa o valor do dicionario e multiplica 
compraProduto = (produtos.mouse.preco * venda) + compraProduto // ja faz a soma da compra  toda

// alterando as quantidades apos a compra
produtos.teclado.quant = produtos.teclado.quant - venda;
produtos.mouse.quant = produtos.mouse.quant - venda;

// nota fical detalhada 
console.log( `
       ======== NOTA FISCAL ========
ITENS   |  QUANTI  |  VALOR  | ESTOQUE FINAL 
TECLADOS|    ${venda}    |   ${produtos.teclado.preco}    |   ${produtos.teclado.quant}
MOUSES  |    ${venda}    |   ${produtos.mouse.preco}    |   ${produtos.mouse.quant}

VALOR TOTAL : R$ ${compraProduto},00
`
);

console.log("-------------------------------------");
/*
## Bloco 2 — Tipos de dados
*/
// 6. Cria uma variável de cada tipo primitivo: string, number, boolean, undefined, null, bigint e symbol. Apresenta o tipo de cada uma.
let = var1= "" , var2 = 1 ,var3 = true , var5 = null , var4;
console.log(`
var1 = ${typeof var1} ,
var2 = ${typeof var2} ,
var3 = ${typeof var3} ,
var4 = ${typeof var4} ,
var5 = ${typeof var5} 
       `)

console.log("-------------------------------------");

// 7. Cria uma variável `estaChovendo` com um valor booleano e apresenta uma mensagem diferente para `true` e `false`.
let estaChovendo = true , resposta="";
if(estaChovendo){
       resposta = "Eita que toro ta caindo em !!";
}else{
       resposta = "Tava nublado , pensei que ia chover , mas so foi o empressão";
}


console.log("-------------------------------------");
// 8. Cria uma variável sem valor atribuído e verifica, através de código, se o seu valor é `undefined`.


// 9. Cria um array com três nomes e um objeto que represente uma pessoa. Apresenta os tipos de dados dessas estruturas.
// 10. Cria uma variável com o valor `null` e escreve uma condição que verifique se ela está vazia.
