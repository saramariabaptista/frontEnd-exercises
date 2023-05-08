//comeca o projeto 
// npm init -y
// npm i vite
// coloca o script dev: "vite",
// npm i redux 
// instalando a extensao redux dev tools no projeto 
// npm install --save @redux-devtools/extension


import { legacy_createStore as createStore } from 'redux'; //para tirar o 'erro' do Redux Toolkit
import { composeWithDevTools } from '@redux-devtools/extension'; //importa a funcao da extensao 

//Criando uma funcao Reducer
const INITIAL_STATE = { count: 0 };
const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return { count: state.count + 1 };
    }
    return state;
}

// criando a store e o estado agora e visivel na extensao
const store = createStore(reducer, composeWithDevTools);


//Action pra incrementar o contador da aplicacao
const action = {
    type: 'INCREMENT_COUNTER'
  };

//enviando uma action para o reducer via argumento de funcao
store.dispatch({type: 'INCREMENT_COUNTER'});

//le o estado global.
const state = store.getState()

// Fazer acoes quando o estado global e atualizado
store.subscribe(() => {
    console.log(`O novo estado global é ${store.getState()}`)
});


