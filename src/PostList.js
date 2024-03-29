import axios from "axios";
import React, { Component } from "react";

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        console.log(resp);
        this.setState({ posts: resp.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: "Error Rtetrieving Data" });
      });
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        PostList
        {posts.length
          ? posts.map((post) => <div key={post.id}> {post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
