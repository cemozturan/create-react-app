import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo} from './lib/todo-helpers';
import {partial, pipe} from './lib/utils';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn JSX", isComplete: true },
      { id: 2, name: "Build an app", isComplete: false },
      { id: 3, name: "Get rich!", isComplete: false }
    ],
    currentTodo: ""
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos));
    const updatedTodos = getUpdatedTodos(id, this.state.todos);
    this.setState({todos: updatedTodos});
  }

  handleInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    });
    // For this to update the state, we need two things:
    // 1) In the constructor, we need to reference it and bind it to "this".
    // This is needed to make sure that when we call this.setState, "this" refers to
    // the correct context.
    // 2) Add an onChange event handler on the input element
  }

  handleSubmit = (event) => {
      event.preventDefault();
      var newId = generateId();
      var newTodo = {id: newId, isComplete: false, name: this.state.currentTodo};
      var updatedTodos = addTodo(this.state.todos, newTodo);
      this.setState({
          todos: updatedTodos,
          currentTodo: "",
          errorMessage: ""
      });
  }

  handleEmptySubmit = (event) => {
      event.preventDefault();
      this.setState({
          errorMessage: "Please enter a todo name"
      });
  }

  render() {
      const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
        {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            currentTodo={this.state.currentTodo}/>
          <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
