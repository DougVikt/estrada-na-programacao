algoritmo "Analizador de Alteracao de Precos"

var
  nome_produto, alteracao, opcao: caractere
  preco_anterior, preco_atual, valor_porcentagem: real
  continua: logico
inicio
  continua <- verdadeiro
  
  enquanto (continua = verdadeiro) faca
    escreval("-------------------------------------")
    escreval(" ANALIZADOR DE ALTERAÇÃO DE PREÇOS DOS PRODUTOS ")
    escreval("-------------------------------------")
    escreval("Digite o nome do produto: ")
    leia(nome_produto)
    escreval("Digite o preço no mes passado: ")
    leia(preco_anterior)
    escreval("Digite o preço atual do produto: ")
    leia(preco_atual)

    valor_porcentagem <- ((preco_atual - preco_anterior) / preco_anterior) * 100

    escolha verdadeiro
      caso valor_porcentagem > 0
        alteracao <- "AUMENTOU"
      caso valor_porcentagem < 0
        alteracao <- "REDUZIU"
      outrocaso
        alteracao <- "ESTAVEL"
    fimescolha

    escreval("")
    escreval("PRODUTO: ", nome_produto)
    escreval("VALOR DO MES ANTERIOR: R$ ", preco_anterior:1:2)
    escreval("VALOR DO MES ATUAL: R$ ", preco_atual:1:2)
    escreval("ALTERAÇÃO: ", valor_porcentagem:1:2, "% -> ", alteracao)
    escreval("")
    
    escreval("PARA FAZER MAIS UM CALCULO DIGITE 1 OU 0 PARA SAIR: ")
    leia(opcao)

    se (opcao = "0") entao
        escreval("OBRIGADO PELA ESCOLHA !")
        continua <- falso
    fimse
  fimenquanto

fimalgoritmo
