import axios from "axios";
import React, { useEffect } from "react";

function TestObjects() {
  const [post, setPost] = React.useState({});

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      setPost(resp.data.slice(0, 10));
    });
  }, []);
console.log(post)
  return (
    <div>
      {post.length ? post.map((pos) => <p>{pos.title}</p>) : <p>ehh</p>}
    </div>
  );
}

export default TestObjects;
