
#include <stdio.h>
#include <string.h>

// base para armazenamento de forma organizada
struct dados {
    char dia_semana[10];
    int quantidade_pico;
    char horario_pico[4];
};

int main(){
    // dados do pedagio iniciados de fábrica (posições de 0 a 6 ocupadas)
    struct dados pedagio[20] = {
        {"segunda" , 190 , "7h"},
        {"terca"   , 178 , "19h"},
        {"quarta"  , 188 , "7h"},
        {"quinta"  , 169 , "18h"},
        {"sexta"   , 158 , "7h"},
        {"sabado"  , 70  , "8h"},
        {"domingo" , 10  , "13h"},
    };
    
    // CORRIGIDO: i começa em 7 porque os índices de 0 a 6 já possuem dados
    int opcao = -1, i = 7; 
    
    printf("\n--- CADASTRO DO PEDAGIO ---\n");
    while(opcao != 0) {
        printf("\nRegistre o dia da Semana, quantidade de carros e o horario\n");

        // Lendo a String do Dia da Semana
        printf("Digite o dia da semana: ");
        fgets(pedagio[i].dia_semana, sizeof(pedagio[i].dia_semana), stdin);
        pedagio[i].dia_semana[strcspn(pedagio[i].dia_semana, "\n")] = '\0'; 

        // Lendo o Número da Quantidade
        printf("Digite a quantidade de pico: ");
        scanf("%d", &pedagio[i].quantidade_pico);
        
        // Limpeza do buffer do teclado
        while (getchar() != '\n'); 

        // Lendo a String do Horário
        printf("Digite o horario de pico (ex: 18h): ");
        fgets(pedagio[i].horario_pico, sizeof(pedagio[i].horario_pico), stdin);
        pedagio[i].horario_pico[strcspn(pedagio[i].horario_pico, "\n")] = '\0'; 
        
        printf("----- DADOS SALVOS COM SUCESSO -----\n");
        
        printf("\nContinuar adicionando dados?\n 1 para sim \n 0 para sair \n 2 para listar todos os dados\nOpcao: ");
        // CORRIGIDO: Adicionado o '&' comercial obrigatório para o scanf
        scanf("%d", &opcao); 
        
        // CORRIGIDO: Limpar buffer após o scanf do menu para o próximo fgets não bugar
        while (getchar() != '\n'); 
        
        switch(opcao){
            case 1:
                i++; // Avança para a próxima posição livre do vetor
                if (i >= 20) {
                    printf("\n[AVISO] O limite de 20 registros foi atingido!\n");
                    opcao = 0; // Força a saída se o vetor lotar
                }
                break;
            case 2:
                printf("\n| DIA SEMANA | QUANT.PICO | HORARIO |\n");
                printf("+------------+------------+---------+\n");
                // CORRIGIDO: Listar apenas até 'i' para não ler posições vazias (lixo de memória)
                for (int j = 0; j <= i; j++) {
                    printf("| %-10s |     %-6d |   %-5s |\n", 
                           pedagio[j].dia_semana, pedagio[j].quantidade_pico, pedagio[j].horario_pico);
                }
                printf("+------------+------------+---------+\n");
                
                // Pergunta o que fazer após listar
                printf("\nO que deseja fazer agora?\n 1 para cadastrar mais um \n 0 para sair\nOpcao: ");
                scanf("%d", &opcao);
                while (getchar() != '\n');
                if(opcao == 1) {
                    i++;
                }
                break;
            case 0:
                printf("\nAte a proxima !\n");
                break;
            default:
                printf("\nAlternativa errada ! Tente novamente !\n");
                break;
        }
    }

    return 0;
}
