// primeiro hello world 
console.log("Hello World !")

// ------------- USANDO VARIAVEIS ----------------

/*
 var = originalmente usado para declarar as variaveis  , mas tem um problema o usa atualmente 
        ela permite a redeclaração da variavel podendo causar erro no codigo 
 let = usada atualmente para declarar variaveis , por ser mais atual , ela impede declarar a 
        variavel mais de uma vez 
*/
var nome = "doug";
let sobrenome = "vikt";

console.log(nome ,sobrenome);

// alterando os valores das variaveis

let preco = 120;
console.log("preço original :",preco);
preco = 120 - 40;
console.log("retirou 40 :",preco);


//=================== EXERCICIOS ============================
// Bloco 1 — Variáveis e constantes
// 1. Declara uma variável chamada `nome`, atribui-lhe o teu nome e apresenta o valor na consola.
let nome = "doug";
console.log("valor da variavel nome:", nome);

// 2. Declara duas variáveis, `idade` e `cidade`, e apresenta uma frase com os dois valores.
let idade = 200 , cidade = "recife";
console.log(`A cidade de ${cidade} tem ${idade} anos`);


// 3. Declara uma constante `PI` com o valor `3.14159` e calcula a área de um círculo com raio `5`.

// 4. Cria duas variáveis numéricas, troca os valores entre elas e apresenta o resultado.

// 5. Declara variáveis para armazenar o nome de um produto, o preço e a quantidade. Calcula e apresenta o valor total da compra.  