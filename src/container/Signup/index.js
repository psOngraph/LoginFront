import React, { Component } from "react";

import Form from "../../components/Form";

class index extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  render() {
    return (
      <Form
        handleSubmit={this.handleSubmit}
        title={"SignUp"}
        buttonName={"Sign Up"}
      />
    );
  }
}

export default index;
