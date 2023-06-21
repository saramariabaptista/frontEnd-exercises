import { legacy_createStore as createStore } from 'redux'; 
import { composeWithDevTools } from '@redux-devtools/extension'; 

const store = createStore(reducer, composeWithDevTools);

const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

  
 


