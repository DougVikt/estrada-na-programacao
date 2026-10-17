algoritmo "Analizador de Alteracao de Precos"

var
  alteracao : caractere
  opcao , i , l: inteiro
  continua: logico
  db_produto: vetor[1..9] de caractere
  db_precoIncial , db_precoAtual , db_porcentagem: vetor[1..9] de real
inicio
  db_produto[1] <- "Feijão"
  db_precoIncial[1] <- 9.49
  db_precoAtual[1] <- 10.99
  db_porcentagem[1] <- 15.80

  db_produto[2] <- "Arroz"
  db_precoIncial[2] <- 3.25
  db_precoAtual[2] <- 3.49
  db_porcentagem[2] <- 7.38

  db_produto[3] <- "Macarrão"
  db_precoIncial[3] <- 2.49
  db_precoAtual[3] <- 3.99
  db_porcentagem[3] <- 60.24

  continua <- verdadeiro
  i <- 4

  enquanto (continua = verdadeiro) faca
    limpatela
    escreval("-------------------------------------")
    escreval(" ANALIZADOR DE ALTERAÇÃO DE PREÇOS DOS PRODUTOS ")
    escreval("-------------------------------------")
    escreval("EM NOSSO BANCO JA TEMOS OS PRODUTOS :")
    escreval("ARROZ , MACARRÃO E FEIJÃO ;")
    escreval("Digite o nome do produto: ")
    leia(db_produto[i])
    escreval("Digite o preço no mes passado: ")
    leia(db_precoIncial[i])
    escreval("Digite o preço atual do produto: ")
    leia(db_precoAtual[i])

    db_porcentagem[i] <- ((db_precoAtual[i] - db_precoIncial[i]) / db_precoIncial[i]) * 100

    escolha verdadeiro
      caso db_porcentagem[i] > 0 e db_porcentagem < 20
        alteracao <- "AUMENTOU"
      caso db_porcentagem[i] > 20
        alteracao <- "AUMENTO ABUSIVO"
      caso db_porcentagem[i] < 0
        alteracao <- "REDUZIU"
      outrocaso
        alteracao <- "ESTAVEL"
    fimescolha

    escreval("")
    escreval("PRODUTO: ", db_produto[i])
    escreval("VALOR DO MES ANTERIOR: R$ ", db_precoIncial[i]:1:2)
    escreval("VALOR DO MES ATUAL: R$ ", db_precoAtual[i]:1:2)
    escreval("ALTERAÇÃO: ", db_porcentagem[i]:1:2, "% -> ", alteracao)
    escreval("")

    escreval("PARA FAZER MAIS UM CALCULO DIGITE 1 , 2 PARA LISTAR OS SALVOS E 0 PARA SAIR: ")
    leia(opcao)

    escolha opcao
      caso 0
        escreval("OBRIGADO POR USAR NOSSO APP , ATE A PROXIMA")
        continua <- falso
      caso 2
        escreval("LISTANDO OS ITENS SALVO...")
        para l de 1 ate i faca
          escreval("PRODUTO: ", db_produto[l])
          escreval("VALOR DO MES ANTERIOR: R$ ", db_precoIncial[l]:1:2)
          escreval("VALOR DO MES ATUAL: R$ ", db_precoAtual[l]:1:2)
          escreval("ALTERAÇÃO: ", db_porcentagem[l]:1:2, "% -> ", alteracao)
          escreval("-------------------------")
        fimpara
      caso 1
        i <- i + 1
      outrocaso
        escreval("OPÇÃO INCORRETA ! FINALIZANDO O PROGRAMA... ")
        continua <- falso
    fimescolha

  fimenquanto

fimalgoritmo
