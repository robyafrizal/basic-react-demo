import React, { Component } from 'react';
import { Checkbox, Message } from 'semantic-ui-react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
      error: ''
    };
  }

  handleTodoInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleTodoButton = event => {
    event.preventDefault();
    const todos = this.state.todos.slice(); //copy original state

    if (this.state.inputValue === '') {
      this.setState({ error: 'input tidak boleh kosong' });
      return;
    }

    const todosObj = {};
    todosObj['id'] = this.state.todos.length + 1;
    todosObj['todo'] = this.state.inputValue;
    todosObj['status'] = false;

    todos.push(todosObj);

    this.setState({ todos, inputValue: '', error: '' });
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <Message color='black'>
            <Message.Header>
              We're sorry we can't apply that discount
            </Message.Header>
            <p>That offer has expired</p>
          </Message>
        )}
        <form onSubmit={this.handleTodoButton}>
          <input
            type='text'
            name='inputValue'
            value={this.state.inputValue}
            onChange={this.handleTodoInput}
          />
          <button>Add Todo</button>
        </form>
        <div>
          <ul>
            {this.state.todos.map((data, index) => (
              <Checkbox key={index} label={data.todo} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
