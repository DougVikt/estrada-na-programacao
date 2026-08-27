# 🚀 Estrada na Programação

Bem-vindo(a) ao **Estrada na Programação**!

Este repositório foi criado para ser um ponto de encontro de quem está **começando agora** na programação e participa do curso de programação da Cruzeiro. Aqui você vai guardar, compartilhar e aprender olhando o código dos colegas.

O objetivo é simples: **todo mundo que está aprendendo pode enviar seus scripts aqui**. Não importa se o código é pequeno, se tem erro ou se parece "bobo". O importante é praticar, colaborar e evoluir junto.

## 🎯 Objetivo do projeto

Este repositório existe para:

- **Praticar programação** enviando seus scripts, mesmo os mais simples.
- **Guardar seu progresso** num lugar seguro (na nuvem), para você ver como evoluiu com o tempo.
- **Aprender com os colegas** lendo o código de outras pessoas que estão no mesmo nível.
- **Se acostumar com ferramentas reais** que programadores usam no dia a dia (Git, GitHub, terminal).
- **Colaborar** ajudando quem está começando, sem apagar o trabalho de ninguém.

Resumindo: é uma "estrada" onde a gente caminha junto, trocando conhecimento e perdendo o medo de escrever código.

---

## 🧰 Por que usar cada ferramenta?

Cada programa aqui tem um papel. Não é só "instalar e usar" — entender **para que serve** ajuda você não se perder.

| Ferramenta | Para que serve |
|------------|----------------|
| **GitHub** | É a "nuvem" onde o código fica guardado e onde todos conseguem ver e enviar. É como uma rede social de código. |
| **Git** | É o programa que registra suas mudanças e manda/baixa o código do GitHub. Ele lembra o histórico de tudo. |
| **Terminal (Prompt/PowerShell)** | É onde você digita os comandos do Git. Parece antigo, mas é a forma mais direta de controlar o código. |
| **Editor de código (VS Code)** | É onde você escreve e edita seus scripts com conforto, com cores e ajuda de digitação. |

Você não precisa dominar nenhuma delas de cara. Este guia te leva passo a passo.

---

## 📌 Regras de ouro (LEIA COM ATENÇÃO)

Antes de qualquer coisa, existem **duas regras obrigatórias** para quem vai enviar um script. Se você não seguir, seu envio não será aceito:

### 1️⃣ Você DEVE explicar o que o script é ou para que ele serve
Toda vez que você mandar um arquivo de código, precisa dizer **o que era (ou o que é) para ele fazer**. Ou seja: qual era o exercício, qual era o pedido do professor, ou qual problema você tentou resolver.

> Exemplo certo: "Esse script era para ler o nome do usuário e mostrar uma saudação na tela."
> Exemplo errado: "script novo.py" (sem nenhuma explicação)

Isso ajuda os outros a entenderem seu código e ajuda você a treinar a explicar o que faz — que é uma habilidade super importante na programação.

### 2️⃣ Você DEVE escrever algo ao enviar (mensagem de commit obrigatória)
Nunca envie um arquivo "no silêncio". Você precisa **obrigatoriamente escrever uma mensagem** dizendo o que você fez naquele envio. Isso chama-se **commit** e a mensagem é a "carta" que acompanha seu código.

> Exemplo de mensagem certa: "Adicionei meu primeiro script de calculadora em Python"
> Exemplo errado: enviar sem escrever nada, ou escrever "atualizei" (vago demais)

### 3️⃣ NUNCA apague o código dos colegas
O repositório é de todo mundo. O código que outro estudante enviou é dele e deve continuar lá, intacto.

Se você quiser **ajudar** ou **melhorar** o script de alguém, não apague o original. Em vez disso:
- Adicione **comentários** explicando ou sugerindo melhorias.
- Escreva o seu código **abaixo do original**, identificando que é uma sugestão sua.

Exemplo de como fazer (em Python):

```python
# Código original do João (não apaguei, deixei aqui de referência)
# nome = input("nome: ")
# print("Oi " + nome)

# Sugestão de melhoria por Maria (comentei abaixo do original)
nome = input("Digite seu nome: ")
print(f"Olá, {nome}! Seja bem-vindo.")
```

Assim a pessoa aprende com sua versão, mas o trabalho dela continua respeitado. 🙌

---

## 🧰 O que você precisa ter instalado antes de começar

Não se assuste, é bem pouca coisa. Vamos por partes.

### 1. Uma conta no GitHub
O GitHub é o site onde o código fica guardado. É de graça.
- Acesse: https://github.com
- Clique em **Sign up** (cadastrar) e crie sua conta.

### 2. O Git instalado no seu computador
O Git é o programa que envia e puxa código do GitHub.
- Baixe em: https://git-scm.com/downloads
- Instale clicando em "Next" em tudo (configuração padrão está ótima).
- Para conferir se deu certo, abra o terminal (veja abaixo) e digite:
  ```
  git --version
  ```
  Se aparecer algo como `git version 2.xx.x`, está instalado!

### 3. Um terminal
- **Windows:** procure por "Prompt de Comando" ou "PowerShell" no menu iniciar.
- **Linux/Mac:** procure por "Terminal".
O terminal é aquela telinha preta onde a gente digita comandos. Vamos usá-lo bastante.

### 4. Um editor de código (opcional, mas recomendado)
Para escrever seus scripts use o **VS Code**: https://code.visualstudio.com
Ele é grátis e fácil de usar.

---

## 🗺️ Passo a passo: como enviar seu primeiro script

Vamos fazer devagar, um passo de cada vez.

### Passo 1 — Peça para participar como colaborador
Aqui não usamos Fork (copiar o repositório). Em vez disso, você vai ser **colaborador oficial** do repositório, ou seja, vai poder enviar código direto, sem precisar de Pull Request.

1. Entre no GitHub e vá até a página deste repositório.
2. Procure o responsável (professor/organizador) e **peça para ser adicionado como colaborador**.
   - Você pode mandar uma mensagem no canal do curso ou abrir uma "Issue" pedindo: *"Quero ser colaborador para enviar meus scripts"*.
3. O responsável vai te adicionar. Depois disso, você recebe um convite por e-mail ou aparece na sua conta do GitHub para aceitar.
4. Aceite o convite. Agora você é colaborador e pode enviar direto. 🎉

### Passo 2 — Baixe o repositório para seu computador (Clone)
Como você é colaborador, clona o repositório **oficial** (não uma cópia sua). No seu terminal, digite:

```
git clone https://github.com/USUARIO_DONO/estrada-na-programacao.git
```

> 💡 Troque `USUARIO_DONO` pelo usuário da pessoa que criou o repositório (o dono). Pergunte ao professor se não souber.

Isso cria uma pasta com o código no seu computador. Entre nela:

```
cd estrada-na-programacao
```

### Passo 3 — Crie uma pasta com o seu nome
Dentro da pasta do projeto, crie uma pasta só sua. Isso evita que seu código se misture com o dos outros.

```
mkdir minha-pasta
```

> 💡 Dica: use seu nome ou apelido. Exemplo: `mkdir maria` ou `mkdir joao-scripts`

Entre na sua pasta:

```
cd minha-pasta
```

### Passo 4 — Escreva seu script
Abra o VS Code ou bloco de notas e crie seu arquivo. Exemplo em Python (`meu_script.py`):

```python
nome = input("Digite seu nome: ")
print("Olá, " + nome + "! Bem-vindo à programação.")
```

Salve o arquivo dentro da sua pasta (`minha-pasta/meu_script.py`).

### Passo 5 — Conte o que o script faz (Regra 1)
Lembre-se: você precisa explicar o que o script é/para que serve. A melhor forma é escrever isso **em comentários no próprio arquivo do script**, lá no topo. Assim quem abrir o código já entende na hora, sem precisar de arquivo separado.

> 💡 **Comentário** é um texto que o computador ignora, só serve para humanos lerem. Quase toda linguagem usa `#` (Python, e em algumas `//`) para comentar.

Exemplo em Python (`meu_script.py`):

```python
# Arquivo: meu_script.py
# O que é: esse script era um exercício para ler o nome do usuário
# e mostrar uma mensagem de boas-vindas na tela.
# Autor: seu nome

nome = input("Digite seu nome: ")
print("Olá, " + nome + "! Bem-vindo à programação.")
```

Você também pode reforçar isso na mensagem do commit (Passo 7), mas o comentário no código é obrigatório.

### Passo 6 — Veja o que mudou
No terminal, volte para a pasta principal do projeto e digite:

```
git status
```

O Git vai mostrar os arquivos novos em vermelho. Normal.

### Passo 7 — Enviar com mensagem obrigatória (Regra 2)
Agora o momento importante. Você vai "empacotar" suas mudanças e escrever a mensagem.

```
git add .
git commit -m "Adicionei meu primeiro script de saudação em Python"
```

⚠️ A parte `-m "..."` é a mensagem obrigatória. Nunca use `git commit` sem a mensagem. Escreva algo que explique o que você fez.

### Passo 8 — Enviar para o GitHub (Push)
```
git push origin main
```

Se pedir usuário e senha, use os do GitHub. (Dica: hoje em dia o GitHub pede um "token", mas se tiver dificuldade, pergunte ao professor.)

### Passo 9 — Pronto! Seu código já está no repositório
Como você é colaborador, o `git push` (Passo 8) já envia direto para o repositório oficial. Não precisa de Pull Request nem de aprovação. 🎉

Se quiser conferir, entre no GitHub na página do repositório oficial e veja sua pasta lá.

> ⚠️ Cuidado: como você envia direto, sempre revise bem antes do `git push`. Se errar, dá pra corrigir depois, mas evite mandar arquivos errados ou pessoais.

---

## 📁 Como organizar seus arquivos

Siga este padrão para deixar tudo limpo:

```
estrada-na-programacao/
├── sua-pasta/
│   ├── meu_script.py
│   └── outro_exercicio.js
├── outra-pessoa/
│   └── ...
└── README.md
```

- Uma pasta por pessoa.
- Nome de arquivo em letras minúsculas e com `_` (ex: `calculadora.py`, não `Calculadora Final FINAL.py`).
- **Sempre comece o arquivo com comentários explicando o que o script faz** (Regra 1).

---

## 💡 Dicas para iniciantes

- **Não tenha vergonha do código.** Todo mundo começa do zero. O código feio de hoje vira o código bom de amanhã.
- **Comente pouco ou nada no início**, mas foque em escrever código que você entenda.
- **Se der erro, não pânico.** Erro é parte do aprender. Leia a mensagem em inglês devagar.
- **Pratique toda semana.** Um script por semana já te deixa longe na frente.
- **Olhe o código dos colegas.** É uma das melhores formas de aprender.
- **Pergunte.** O canal do curso/professor existe para isso. Se travou em algo, pode me perguntar ou chamar os colegas na comunidade do Zap (WhatsApp) do curso — lá todo mundo ajuda todo mundo.

---

## ❓ Perguntas frequentes

**Preciso saber Git bem para participar?**
Não! Este README é justamente para te ensinar do zero. Copie e cole os comandos.

**Posso mandar código em qualquer linguagem?**
Sim! Python, JavaScript, Java, C, o que você estiver aprendendo.

**E se eu apagar o comando e não souber o que fiz?**
Calma. Quase tudo no Git tem volta. Pergunte ao professor antes de tentar comandos estranhos.

**O que é "commit"?**
É como se fosse salvar uma foto das suas mudanças, com uma legenda (a mensagem). Por isso a mensagem é obrigatória.

**Posso atualizar um script que já enviei?**
Claro! Edite o arquivo, faça `git add .`, `git commit -m "mensagem do que mudou"` e `git push` de novo.

---

## 🤝 Resumo das obrigações

Para enviar qualquer script, você é **obrigado** a:

1. ✅ Dizer o que o script era/é para fazer (nos **comentários no topo do própriivo arquivo** e/ou na descrição).
2. ✅ Escrever uma mensagem explicando o envio (o `-m "..."` do commit).
3. ✅ Nunca apagar o código dos colegas. Para ajudar/melhorar, comente e escreva seu código **abaixo do original**.

Sem essas duas coisas, seu código não entra. Combinado? 😄

---

Boa jornada na programação. A "estrada" é longa, mas a gente vem caminhando junto. 🛤️
