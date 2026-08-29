# 📘 Guia Completo para Iniciantes — Do Zero ao Primeiro Script Enviado

Este arquivo é para você que **nunca programou na vida** e não sabe o que é Git, GitHub, terminal ou linguagem de programação. Respira fundo. 💨 Vamos devagar, do absolo zero, sem pressa. Se você seguiu este guia linha por linha, no final vai ter escrito seu primeiro programa e enviado ele para o repositório da turma.

Não pule etapas. Se algo não funcionar, leia de novo com calma. Tudo aqui foi pensado para quem está começando hoje.

---

# PARTE 1 — Entendendo o mundo antes de apertar qualquer botão

## 1. O que é programação? (sim, do zero mesmo)

Programação é dar instruções para o computador seguir. O computador é burro: ele faz exatamente o que você escreve, nem mais nem menos. A "linguagem de programação" é o jeito de escrever essas instruções para o computador entender.

Exemplo bobo: você quer que o computador diga "Oi". Você escreve uma instrução e ele obedece. Pronto, você programou.

## 2. O que é uma linguagem de programação?

É como um idioma. Assim como existem português, inglês, espanhol, existem Python, JavaScript, Java, C... Cada uma tem sua forma de escrever. Neste guia vamos usar **Python**, porque é a mais fácil para iniciantes: parece quase português e tem pouca "encheção de linguiça".

> Não se preocupe em "escolher a linguagem certa". Para começar, Python está ótimo. Depois você conhece outras.

## 3. O que são essas ferramentas todas?

Você vai usar 4 coisas. Vamos conhecer cada uma antes de instalar:

- **Python**: a linguagem que vamos escrever. Precisa estar instalado no seu PC para o computador "entender" o código.
- **VS Code (editor)**: um programa onde você digita o código com conforto (cores, autocompletar). É como o Word, mas para código.
- **Git**: um programa que guarda o histórico das mudanças e envia o código para a internet.
- **GitHub**: um site (nuvem) onde o código da turma fica guardado e onde todos veem o que cada um enviou.
- **Terminal**: uma telinha preta onde se digita comandos em texto. Vamos usar para mandar ordens ao Git.

Parece muito, mas é só instalar e usar. Vamos lá.

---

# PARTE 2 — Preparando o computador (instalação)

> Faça na ordem. Se aparecer janela de "permissão", clique em Sim/Permitir.

## Passo 1 — Criar uma conta no GitHub

1. Abra o navegador (Chrome, Edge, o que tiver).
2. Vá em: https://github.com
3. Clique em **Sign up** (é "cadastrar" em inglês).
4. Coloque seu e-mail, crie uma senha, escolha um nome de usuário (ex: `joaozinho`).
5. Confirme o e-mail que eles enviarem.
6. Pronto, você tem conta. Guarde seu usuário e senha.

## Passo 2 — Pedir para ser colaborador do repositório

Como este repositório da turma não é "público para qualquer um empurrar código", você precisa ser **colaborador**.

1. Vá na página do repositório `estrada-na-programacao` no GitHub.
2. Mande uma mensagem no grupo do curso ou para algum adm : *"Quero ser colaborador para enviar meus scripts"*.
3. O responsável vai te adicionar. Você recebe um convite (no e-mail ou aparece no GitHub).
4. Aceite o convite. Agora você pode enviar código direto. ✅

## Passo 3 — Instalar o Python

1. Vá em: https://www.python.org/downloads/
2. Clique no botão amarelo de download (versão mais recente).
3. Abra o instalador.
4. **IMPORTANTE:** na primeira tela, marque a caixinha **"Add Python to PATH"** (isso deixa o Python acessível no terminal). Se não marcar, dá trabalho depois.
5. Clique em **Install Now** e espere terminar.

### Como saber se deu certo
1. Aperte a tecla Windows, digite `cmd` e abra o "Prompt de Comando".
2. Digite:
   ```
   python --version
   ```
3. Se aparecer tipo `Python 3.12.0`, funcionou! 👏
   - Se deu erro "não é reconhecido", reinstale marcando o "Add to PATH".

## Passo 4 — Instalar o Git

1. Vá em: https://git-scm.com/downloads
2. Baixe a versão do Windows.
3. Abra o instalador e clique **Next** em tudo (o padrão já está bom).
4. Quando terminar, feche e abra o Prompt de Comando de novo.
5. Digite:
   ```
   git --version
   ```
6. Se aparecer `git version 2.xx.x`, está instalado! ✅

## Passo 5 — Baixar, instalar e conhecer o VS Code

O VS Code é onde você vai escrever e organizar seus arquivos com facilidade, sem usar o terminal para criar pastas. Vamos instalá-lo e aprender o básico da telinha dele.

### 5.1 — Baixar e instalar
1. Abra o navegador e vá em: https://code.visualstudio.com
2. Clique no botão de download (versão do seu sistema, geralmente Windows).
3. Abra o instalador baixado.
4. Clique em **Next** em todas as telas (a configuração padrão já está ótima).
5. No final, clique em **Install** e espere terminar. Depois **Finish**.

### 5.2 — Abrindo o VS Code pela primeira vez
1. Procure por "VS Code" no menu Iniciar e abra.
2. Pode fechar a telinha de boas-vindas (o que atrapalhar).

### 5.3 — Conhecendo as partes principais (tour rápido)
O VS Code tem algumas áreas. As duas que importam agora:

- **Explorador (ícone de papelzinho dobrado 🗎)**, geralmente no canto esquerdo superior. É onde você vê as pastas e arquivos. Se não aparecer, vá em **View > Explorer** (ou aperte `Ctrl+Shift+E`).
- **Editor**, a parte central grande, onde você digita o código.

### 5.4 — Como criar pastas e arquivos pelo VS Code (sem comando)
Você **não precisa** usar o terminal para criar pastas. No VS Code dá pra fazer com o mouse:

1. No **Explorador**, passe o mouse sobre a área de "pastas" e aparecem uns botõezinhos no topo.
2. O ícone de **nova pasta** (uma pasta com um `+`) cria uma pasta. Clique, digite o nome e aperte Enter.
3. O ícone de **novo arquivo** (uma folha com `+`) cria um arquivo. Clique, digite o nome (ex: `primeiro_script.py`) e aperte Enter.
4. Clique no arquivo criado e ele abre no editor para você digitar.

> 💡 Guarde esse jeito: daqui pra frente, sempre que o guia falar "crie uma pasta", faça por esses botõezinhos do Explorador. Bem mais fácil que comando.

---

# PARTE 3 — Aprendendo o básico de programação (sem pressa)

Antes de escrever, entenda 4 palavrinhas mágicas da programação.

## Comentário
Um texto que **só humanos leem**. O computador ignora. Em Python começamos com `#`.
```python
# isto é um comentário, o computador não executa
```

## Variável
É uma "caixinha" que guarda um valor. Você dá um nome para a caixa.
```python
nome = "João"   # a caixa "nome" guarda o texto "João"
idade = 15      # a caixa "idade" guarda o número 15
```

## Mostrar na tela (print)
Comando para o computador escrever algo na tela.
```python
print("Oi, pessoal!")
```

## Pedir algo ao usuário (input)
Comando que faz uma pergunta e espera o usuário digitar.
```python
nome = input("Qual seu nome? ")
```

## Juntando tudo — nosso primeiro programinha
```python
# Este programa pede o nome e dá oi
nome = input("Qual é o seu nome? ")
print("Olá, " + nome + "! Bem-vindo à programação.")
```
Linha por linha:
1. Comentário explicando.
2. O computador pergunta o nome e guarda na caixa `nome`.
3. O computador escreve "Olá, <o que você digitou>! Bem-vindo...".

Pronto, você já entende programa. 👴➡️👨‍💻

---

# PARTE 4 — Escrevendo e rodando seu primeiro script

## Passo 6 — Criar sua pasta de trabalho (pelo VS Code)

Não vamos usar o terminal para isso. Vamos fazer tudo pelo VS Code:

1. Abra o **VS Code**.
2. No **Explorador** (ícone 🗎 à esquerda), clique com o botão direito na área de arquivos e escolha **Open Folder** (Abrir Pasta), ou vá em **File > Open Folder** e escolha uma pasta sua (ex: `Documentos`).
3. Com a pasta aberta, clique no botão de **nova pasta** (ícone de pasta com `+`) no topo do Explorador e digite o nome: `meus-scripts`. Aperte Enter.
4. Clique na pasta `meus-scripts` para selecioná-la. Pronto, esse é seu espaço de trabalho.

## Passo 7 — Escrever o script no VS Code

1. Abra o **VS Code**.
2. Vá em **File > New File** (Arquivo > Novo Arquivo).
3. Cole este código:
   ```python
   # Arquivo: primeiro_script.py
   # O que é: pede o nome do usuário e mostra uma saudação.
   # Autor: [coloque seu nome aqui]

   nome = input("Qual é o seu nome? ")
   print("Olá, " + nome + "! Este é meu primeiro script. 🎉")
   ```
4. Vá em **File > Save** (Salvar). Salve como `primeiro_script.py` **dentro da pasta que você criou** (`meus-scripts`).

> 💡 Lembre-se da Regra 1 do repositório: sempre explique o que o script faz. Por isso colocamos comentários no topo.
> 📂 **Dica:** dentro do repositório existe uma pasta `exemplo` com um script modelo (`primeiro_script.py`). Você pode abri-lo no VS Code para ver como deve ficar um script bem feito e até copiar como base.

## Passo 8 — Rodar o script (ver funcionando)

1. No Prompt de Comando (ainda na pasta `meus-scripts`), digite:
   ```
   python primeiro_script.py
   ```
2. Ele vai perguntar seu nome. Digite e aperte Enter.
3. Deve aparecer: `Olá, <seu nome>! Este é meu primeiro script. 🎉`

Se funcionou, parabéns! Você programou de verdade. 🚀

---

# PARTE 5 — Enviando para o repositório da turma (Git)

Agora a parte de "guardar na nuvem" e mostrar para todos.

## Passo 9 — Clonar o repositório (baixar para seu PC)

Como você é colaborador, vai baixar o repositório oficial. O clone em si precisa de um comando (é do Git), mas o resto a gente faz pela interface.

1. No VS Code, vá em **Terminal > New Terminal** (Terminal > Novo Terminal) lá em cima. Uma barra de terminal abre embaixo.
2. Nela, digite o comando de clone :
   ```
   git clone https://github.com/DougVikt/estrada-na-programacao.git
   ```
3. O VS Code vai perguntar se quer abrir a pasta clonada. Clique em **Open** (Abrir). Pronto — a pasta `estrada-na-programacao` já está aberta no VS Code, sem você usar `cd` nenhum.

> 💡 Daqui pra frente, use sempre esse **terminal integrado** do VS Code (está logo abaixo do editor). Ele já "está" dentro da pasta do projeto.

## Passo 10 — Criar sua pasta pessoal lá dentro (pelo VS Code)

1. No **Explorador** do VS Code, com a pasta `estrada-na-programacao` aberta, clique no botão de **nova pasta** (pasta com `+`).
2. Digite o nome da sua pasta (use seu nome ou apelido), exemplo: `joao` ou `ana-scripts`. Aperte Enter.
3. Clique para entrar na sua pasta.
4. Dentro dela, clique no botão de **novo arquivo** (folha com `+`) e crie o arquivo `primeiro_script.py`.
5. Cole o mesmo código do Passo 7 e salve (`Ctrl+S`). Assim seu script já está dentro da pasta certa, sem comando nenhum.

> 💡 Se preferir, pode arrastar o `primeiro_script.py` que você já tinha feito (na pasta `meus-scripts`) direto para dentro da sua pasta no Explorador do VS Code.

## Passo 11 — Ver o que mudou

No **terminal integrado** do VS Code (o que abrimos no Passo 9, já dentro do projeto), digite:
```
git status
```
O Git mostra arquivos novos em vermelho. Normal — ele percebeu que tem coisa nova.

## Passo 12 — Empacotar e comentar (commit obrigatório)

Agora você "tira uma foto" das mudanças e escreve a legenda (mensagem obrigatória — Regra 2).

```
git add .
git commit -m "Meu primeiro script: pede nome e da oi"
```

⚠️ O `-m "..."` é a mensagem. Nunca faça `git commit` sem mensagem. Escreva o que você fez.

## Passo 13 — Enviar para o GitHub (push)

```
git push origin main
```

Pode pedir seu usuário e senha do GitHub. Digite-os.
> Dica: se pedir senha e der erro, o GitHub hoje usa um "token". Pergunte ao professor como gerar o seu.

## Passo 14 — Conferir

1. Entre no GitHub na página do repositório oficial.
2. Você vai ver sua pasta (`minha-pasta`) com o `primeiro_script.py` lá dentro. 🎉
3. Pronto! Toda a turma pode ver seu código.

---

# PARTE 6 — Resumo das regras (leia sempre)

Para enviar qualquer script neste repositório, você é **obrigado** a:

1. ✅ **Explicar o que o script faz** — nos comentários no topo do próprio arquivo.
2. ✅ **Escrever uma mensagem no commit** (`-m "..."`) dizendo o que fez.
3. ✅ **Nunca apagar o código dos colegas.** Para ajudar/melhorar, comente e escreva seu código **abaixo do original**.

E lembre-se:
- Uma pasta por pessoa.
- Nome de arquivo em minúsculas com `_` (ex: `calculadora.py`).
- Erro faz parte. Não desista.

---

# PARTE 7 — Dicas de sobrevivência para iniciantes

- **O terminal parece assustador, mas é só texto.** Você digita um comando, ele faz. Nada explode.
- **Mensagens de erro estão em inglês.** Leia devagar, elas dizem o que está errado (ex: "file not found" = arquivo não encontrado).
- **Copie e cole os comandos** deste guia. Não tem problema nenhum.
- **Pratique toda semana.** Um script por semana te faz voar.
- **Olhe o código dos colegas.** É a melhor escola.
- **Pergunte.** Se travou, me chama ou pergunta na comunidade do Zap do curso. Ninguém nasce sabendo.
- **Não tenha vergonha.** Todo programador famoso hoje já foi iniciante escrevendo `print("Oi")`.

---

# PARTE 8 — Perguntas frequentes do iniciante

**O computador apaga meus arquivos se eu errar um comando?**
Não. O Git só muda o que você manda. Relaxa.

**Preciso decorar os comandos?**
Não. Este guia existe. Você pode voltar aqui sempre.

**Posso mandar em JavaScript em vez de Python?**
Pode! O repositório aceita qualquer linguagem. Só ajuste a instalação/execução conforme a linguagem.

**E se eu quiser mudar o script depois?**
Edite o arquivo, salve, e repita os passos 11 a 13 (git add, commit, push). O GitHub guarda o histórico.

**O que significa "main" no push?**
É o nome da "fila principal" de código. É só onde tudo fica. Não se preocupe agora.

**Consigo fazer tudo pelo celular?**
O ideal é no computador. No celular fica bem mais difícil. Use um PC se possível.

---

Você chegou até aqui. Isso já te coloca à frente de quem nem tentou. A "estrada" da programação é longa, mas cada script enviado é um passo a mais. Vamos caminhando. 🛤️💙
