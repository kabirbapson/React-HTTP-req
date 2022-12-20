import axios from "axios";

import React, { Component } from "react";
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",

    };

  }
  
  changeHander = (e) => {

    
    
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  
  
  
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err, "error posting data");
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            ID:
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHander}
            />
          </div>{" "}
          <div>
            Name:
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHander}
            />
          </div>{" "}
          <div>
            Body:{" "}
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHander}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
