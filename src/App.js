import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // Calls the constructor of the Component class that we are extending
    this.state = {
      todos: [
        { id: 1, name: "Learn JSX", isComplete: true },
        { id: 2, name: "Build an app", isComplete: false },
        { id: 3, name: "Get rich!", isComplete: false }
      ],
      currentTodo: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      currentTodo: event.target.value
    });
    // For this to update the state, we need two things:
    // 1) In the constructor, we need to reference it and bind it to "this".
    // This is needed to make sure that when we call this.setState, "this" refers to
    // the correct context.
    // 2) Add an onChange event handler on the input element
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text" onChange={this.handleInputChange} value={this.state.currentTodo} />
          </form>
          <div>
            <div className="Todo-List">
              <ul>
                {this.state.todos.map(todo =>
                  <li key={todo.id}>
                    <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
