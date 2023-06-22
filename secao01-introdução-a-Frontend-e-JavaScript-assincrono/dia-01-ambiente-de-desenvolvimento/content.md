Por que criar um ambiente de desenvolvimento web?

Temos algumas vantagens com um ambiente de desenvolvimento configurado:

- Não precisamos nos preocupar com a ordem das tags scripts dentro do nosso HTML.
- Não precisamos nos preocupar com dependências entre diferentes arquivos.
- Conseguimos instalar e trabalhar com bibliotecas externas do NPM, sem necessidade de usarmos um CDN.
- Ao não usarmos mais CDN, não precisamos nos preocupar com variáveis JavaScript poluindo o escopo global do nosso navegador.
- Conseguimos usar formas mais avançadas de CSS como pré-processadores (sass, por exemplo) bem como vários frameworks CSS (tais como tailwindCSS, bootstrap e outros).
- Conseguimos otimizar para performance (por exemplo, utilizando técnicas como tree shaking, bundling e minificação).

### Passo a passo para começar um projeto 

Estruturar o projeto 
src: Utilizada para o código fonte
dist ou build: Utilizada para o código compilado que irá para produção. Geralmente essa pasta é criada automaticamente por nosso ambiente.
``` 
index.html 
Usar o script em forma de ESM - ES Modules, ou seja, type="module".
Sintaxe: import/export. 
Se fosse usar a forma CommonJS seria: require - module.exports
```
main.js

npm init (criar o projeto)
git init (inicializar o repositorio).

bundler compila todo o codigo em um arquivo mais facil de ser lido pelo navegador. 

O Vite fornece ferramentas de desenvolvimento para nossa aplicação, como, por exemplo, um servidor de desenvolvimento (também comumente chamado de dev-server) e um bundler para compilação final da aplicação.

Para utilizar o dev-server, basta executar o comando no terminal:

npx vite --open

O NPX é um programa que é instalado quando instalamos o NPM (a partir da versão 5.2). Quando falamos de NPX, precisamos entender o que é NPM.

O NPM é um gerenciador de pacotes que é instalado automaticamente quando instalamos o node na nossa máquina. Ele também é o hub onde ficam armazenadas a maioria das bibliotecas javascript. Se quiser explorar, acesse a página do npm.


 npm init @eslint/config

 
How would you like to use ESLint? - Use as setas de navegação do seu teclado até selecionar a opção To check syntax, find problems, and enforce code style e aperte a tecla ENTER para confirmar.

What type of modules does your project use? - Selecione a opção JavaScript modules (import/export) para confirmar, para informar que utilizaremos ES Modules no projeto.

Which framework does your project use? - Como ainda não estamos usando nenhum framework na nossa aplicação, selecione a opção None of these.

Does your project use TypeScript? - Como utilizamos JavaScript em vez de TypeScript, selecione a opção No.

Where does your code run? - Selecione opção Browser.

How would you like to define a style for your project? - Como estamos configurando nosso próprio estilo, selecione a opção Answer questions about your style.

What format do you want your config file to be in? - Selecione a opção JSON. Essa opção, ao término da execução, irá criar o arquivo de configuração .eslintrc.json, que mostraremos mais abaixo.

What style of indentation do you use? - Selecione a opção Spaces.

What quotes do you use for strings? - Selecione a opção Single, para indicar que utilizaremos aspas simples.

What line endings do you use? - Selecione a opção Unix.

Do you require semicolons? - Selecione a opção Yes, para indicar que utilizaremos ponto e vírgula ;.

Would you like to install them now? Selecione a opção Yes, para instalar todas as dependências necessárias.

Which package manager do you want to use? Selecione a opção npm.