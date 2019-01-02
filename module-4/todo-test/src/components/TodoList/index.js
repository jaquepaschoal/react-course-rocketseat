import React, { Component } from 'react';

export default class TodoList extends Component {
    state = {
        todos: [ 
            { id: 0, text: 'Fazer café'},
            { id: 1, text: 'Fazer café2'},
            { id: 2, text: 'Fazer café3'},
            { id: 3, text: 'Fazer café4'},
        ],
    }

    render() {
        return (
            <ul>
                {this.state.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
            </ul>
        )
    }
}