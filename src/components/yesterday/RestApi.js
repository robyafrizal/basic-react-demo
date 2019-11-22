import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RestApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false,
      error: ''
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(result => {
        this.setState({
          isLoaded: true,
          posts: result.data
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
    const { posts, error, isLoaded } = this.state;

    if (error) {
      return <div> {error} </div>;
    }

    if (!isLoaded) {
      return <div> Loading... </div>;
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>JSON Placeholders</h1>
        <ul>
          {posts &&
            posts.map((data, index) => (
              <li key={index}>
                <Link to={`/post-detail/${data.id}`}> {data.title} </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default RestApi;
