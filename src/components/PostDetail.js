import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDetail: {},
      isLoaded: false,
      error: ''
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      )
      .then(result => {
        this.setState({
          isLoaded: true,
          postDetail: result.data
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error.message
        });
      });
  }

  render() {
    const { postDetail, error, isLoaded } = this.state;

    if (error) {
      return <div> {error} </div>;
    }

    if (!isLoaded) {
      return <div> Loading... </div>;
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>JSON Placeholders</h1>
        <div>
          <h1>{postDetail.title}</h1>
          <p>{postDetail.body}</p>
          <small>
            Post dari user id <strong>{postDetail.userId}</strong>
          </small>
          <br />
          <small>
            Post ke <strong>{postDetail.id}</strong>
          </small>
        </div>

        <br />
        <button onClick={() => this.props.history.goBack()}>Back</button>
      </div>
    );
  }
}

export default withRouter(PostDetail);
