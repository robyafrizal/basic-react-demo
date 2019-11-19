import React, { Component, createRef } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    this.username = createRef();
    this.email = createRef();
    this.phoneNumber = createRef();
    this.password = createRef();
    this.country = createRef();
    this.file = createRef();
    // };
  }

  //   handleChange = event => {
  //     const { value, name } = event.target;

  //     this.setState({
  //       [name]: value
  //     });
  //   };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.username.current.value);
    console.log(this.email.current.value);
    console.log(this.password.current.value);
    console.log(this.phoneNumber.current.value);
    console.log(this.country.current.value);
    console.log(this.file.current.files);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' ref={this.username} />
          </div>
          <div>
            <label htmlFor='email'>e-Mail</label>
            <input type='email' name='email' ref={this.email} />
          </div>
          <div>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type='tel' name='phoneNumber' ref={this.phoneNumber} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' ref={this.password} />
          </div>
          <select name='country' ref={this.country}>
            <option value='indonesia'>Indonesia</option>
            <option value='malaysia'>Malaysia</option>
          </select>
          <input type='file' ref={this.file} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
