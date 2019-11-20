import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import axios from 'axios';

import DeleteTodo from './modalDelete';

const URI = `http://localhost:3069`;

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
      error: '',
      isLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get(URI)
      .then(result =>
        this.setState({
          todos: result.data,
          isLoaded: true
        })
      )
      .catch(error => {
        this.setState({
          error: error.message,
          isLoaded: true
        });
      });
  }

  handleTodoInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodoButton = event => {
    event.preventDefault();
    // const todos = this.state.todos.slice(); //copy original state

    if (this.state.inputValue === '') {
      this.setState({ error: 'input tidak boleh kosong' });
      return;
    }

    const todosObj = {};
    todosObj['id'] = this.state.todos.length + 1;
    todosObj['todo'] = this.state.inputValue;
    todosObj['status'] = false;
    todosObj['isEdit'] = false;

    axios
      .post(URI, todosObj)
      .then(result => {
        this.setState({ todos: result.data.todos, inputValue: '', error: '' });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });

    // todos.push(todosObj);

    // this.setState({ todos, inputValue: '', error: '' });
  };

  deleteTodo = idTodo => {
    // const todos = [...this.state.todos];
    // ======== cara pertama pakai splice =============
    // const findTodoIndex = todos.findIndex(element => element.id === idTodo);
    // todos.splice(findTodoIndex, 1);

    // ======== cara kedua pakai filter =============
    // const filteredTodo = todos.filter(element => element.id !== idTodo);

    // this.setState({
    //   todos: filteredTodo
    // });

    axios
      .delete(`${URI}/${idTodo}`)
      .then(result => {
        this.setState({ todos: result.data });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
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
      todos,
      error: ''
    });
  };

  updateTodo = (index, id) => {
    const todos = [...this.state.todos];
    todos[index].isEdit = false;
    // this.setState({
    //   todos
    // });

    axios
      .put(`${URI}/${id}`, {
        todo: todos[index].todo,
        status: 1
      })
      .then(result => {
        this.setState({
          todos: result.data.todos
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  };

  render() {
    const { isLoaded, error } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ paddingTop: 40 }}>
        {error && (
          <Message color='black'>
            <Message.Header>Input tidak boleh kosong</Message.Header>
          </Message>
        )}
        <form onSubmit={this.addTodoButton}>
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
                    <span onClick={() => this.updateTodo(index, data.id)}>
                      update todo
                    </span>
                    <span onClick={() => this.updateTodo(index)}>Cancel</span>
                  </React.Fragment>
                ) : (
                  <li>
                    {data.todo}
                    <DeleteTodo deleteTodo={() => this.deleteTodo(data.id)} />
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
