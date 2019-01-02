import React, { Component, Fragment } from "react";

export default class TodoList extends Component {
  state = {
    todos: [
      { id: 0, text: "Fazer café" },
      { id: 1, text: "Fazer café2" },
      { id: 2, text: "Fazer café3" },
      { id: 3, text: "Fazer café4" }
    ]
  };

  removeTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random, text: "Novo todo" }]
    });
  };

  render() {
    return (
      <Fragment>
        <ul>
          {this.state.todos.map(todo => (
            <li onClick={() => this.removeTodo(todo.id)} key={todo.id}>
              {todo.text}
            </li>
          ))}
        </ul>
        <button onClick={this.addTodo}>Adicionar Todo</button>
      </Fragment>
    );
  }
}
