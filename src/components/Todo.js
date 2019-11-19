import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

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
    todosObj['isEdit'] = false;

    todos.push(todosObj);

    this.setState({ todos, inputValue: '', error: '' });
  };

  deleteTodo = idTodo => {
    const todos = [...this.state.todos];
    // ======== cara pertama pakai splice =============
    // const findTodoIndex = todos.findIndex(element => element.id === idTodo);
    // todos.splice(findTodoIndex, 1);

    // ======== cara kedua pakai filter =============
    const filteredTodo = todos.filter(element => element.id !== idTodo);

    this.setState({
      todos: filteredTodo
    });
  };

  editTodo = index => {
    const todos = [...this.state.todos];
    todos[index].isEdit = true;
    this.setState({
      todos
    });
  };

  handleChange = (event, index) => {
    const todos = [...this.state.todos];
    todos[index].todo = event.target.value;

    this.setState({
      todos
    });
  };

  updateTodo = index => {
    const todos = [...this.state.todos];
    todos[index].isEdit = false;
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div style={{ paddingTop: 40 }}>
        {this.state.error && (
          <Message color='black'>
            <Message.Header>Input tidak boleh kosong</Message.Header>
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
              <React.Fragment key={index}>
                {this.state.todos[index].isEdit ? (
                  <React.Fragment>
                    <input
                      type='text'
                      value={data.todo}
                      onChange={event => this.handleChange(event, index)}
                    />
                    <span onClick={() => this.updateTodo(index)}>
                      update todo
                    </span>
                    <span onClick={() => this.updateTodo(index)}>Cancel</span>
                  </React.Fragment>
                ) : (
                  <li>
                    {data.todo}
                    <span onClick={() => this.deleteTodo(data.id)}>x</span>
                    <span onClick={() => this.editTodo(index)}>edit</span>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
