import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
          <div>
            <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
            <form className="form">
    
              <label htmlFor="name">
                Nome:
                <input
                  id="name"
                  name="name"
                  type="text"
                />
              </label>
    
              <label htmlFor="email">
                Email:
                <input
                  id="email"
                  name="email"
                  type="email"
                />
              </label>
    
              <label htmlFor="age">
                Idade:
                <select
                  id="age"
                  name="age"
                  defaultValue=""
                >
                  <option value="">Selecione</option>
                  <option value="adult">Maior que 18</option>
                  <option value="underage">Menor que 18</option>
                </select>
              </label>
    
              <label htmlFor="anecdote">
                Anedota:
                <textarea id="anecdote" name="anecdote" />
              </label>
    
            </form>
          </div>
        );
      }
}
    
export default Form;