import React, { Component } from 'react';
import axios from 'axios';

class AddNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      userId: 0,
      id: 0
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitPost = event => {
    event.preventDefault();
    const { id, ...rest } = this.state;
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, rest, {
        headers: {
          'content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  updatePost = event => {
    event.preventDefault();
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${this.state.id}`,
        this.state,
        {
          headers: {
            'content-type': 'application/json; charset=UTF-8'
          }
        }
      )
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  deletePost = event => {
    event.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
      .then(result => {
        console.log(result);
        this.setState({
          data: result.data
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { title, body, userId, id } = this.state;
    return (
      <div>
        <form onSubmit={this.submitPost}>
          <div>
            <label htmlFor='id'>ID</label>
            <input
              type='text'
              name='id'
              value={id}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='body'>Body</label>
            <input
              type='text'
              name='body'
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='userId'>User ID</label>
            <input
              type='text'
              name='userId'
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <button>Add New Post</button>
          <button onClick={this.updatePost}>Update Post</button>
          <button onClick={this.deletePost}>Delete Post</button>
        </form>
      </div>
    );
  }
}

export default AddNewPost;
