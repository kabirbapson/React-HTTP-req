import React, { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())

      .then((json) => setPosts(json.slice(0, 10)))
      .catch((err) => console.log(err));
  }, []);

  console.log(posts);

  return (
    <div>
          <h1>
              {posts[0].title}
              {posts[1].title}
              {posts[2].title}
              {posts[3].title}
        {posts.map((item) => {
          return (
            <div>
              <h1>{item.title}</h1>
              <h3>{item.body}</h3>
            </div>
          );
        })}
      </h1>
    </div>
  );
}
