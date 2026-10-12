#include <stdio.h>

int main()
{
    // intro
    printf("========= CHAT FAQ ==========\n");
    printf("Seja bem vindo ao chat para tirar suas duvidas\n");
    printf("Sou Dani , com o que posso ajudar ?");
    
    // variaveis
    int opcao = 8;
    char procura[50];
    
    while(opcao != 0){
        // Exibe o menu de opções
        printf("\n--- MENU DE ATENDIMENTO ---\n");
        printf("1 - Saber o horário de funcionamento\n");
        printf("2 - Não achou o que queria ?\n");
        printf("3 - Ver promoções atuais\n");
        printf("4 - Formas de pagamentos aceitas\n");
        printf("5 - O que fazer quando quero trocar o produto ?\n");
        printf("6 - Quero falara com um(a) atendente\n");
        printf("0 - Finalizar o atendimento\n");
        printf("Digite o número da sua opção: ");
        
        scanf("%d",&opcao);
        printf("\nDani: ");
        
        // decisão do usuario
        switch(opcao){
            case 1:
                printf("Nosso horário é de segunda a sexta, das 8h às 18h.\n");
                break;
            case 2:
                printf("Sentimos muito por não ter achado o que queria,\n"); 
                printf("então nos conte o que procura para termos na sua proxima vinda\n");
                scanf(" %[^\n]",procura);
                printf("Obrigado pela preferencia !\n");
                break;
            case 3:
                printf("Voce sera direcionado ao nosso site para ver as ofertas\n");
                break;
            case 4:
                printf("Aceitamos cartão de debito e credito e pix \n");
                break;
            case 5:
                printf("Para trocas , vele a nota fiscal junto com a peça de troca para um dos nossos caixas\n");
                break;
            case 6:
                printf("Ta certo ! Em instantes voce será direcionado a um dos nossos atendentes\n");
                return 0;
            case 0:
                printf("Obrigado pela preferencia e espero ter ajudado ! Ate a proxima !\n");
                break;
            default:
                printf("Opção incorreta ! tente novamente !\n");
            
        }
        
    }
    
    return 0;
}