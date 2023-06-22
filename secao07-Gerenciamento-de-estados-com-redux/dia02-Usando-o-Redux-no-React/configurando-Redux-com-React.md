# Configurando Redux com React

O primeiro passo é criar a aplicação React:

```
npx create-react-app my-app
```

Depois, instalamos as dependências que iremos utilizar nessa aula:

```
npm install redux react-redux
```

redux é a biblioteca que possui a implementação do Redux;

react-redux é a biblioteca que realiza a conexão entre o Redux e o React.

# Criando a Store e o Reducer
Para criarmos o estado global da aplicação, precisamos implementar a store, que irá armazenar o estado. Para isso, basta importarmos e executarmos a função createStore do redux.

```
// ./src/redux/index.js //
import { createStore } from 'redux';

const store = createStore();

export default store;

```

Com a store pronta, precisamos criar o reducer, que é o responsável por escrever no estado global.

Para conseguirmos visualizar as informações do nosso estado global, vamos também adicionar a biblioteca Redux Devtools. Para instalá-la, utilize o comando abaixo:

```
npm install --save @redux-devtools/extension
```

