import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/Form';

class index extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      'handle Submit function',
      this.state.email,
      this.state.password
    );
  };
  render() {
    return (
      <Form
        handleSubmit={this.handleSubmit}
        title={'Sign In'}
        buttonName={'Sign In'}
        handleChange={this.handleChange}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

export default index;
