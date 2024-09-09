import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchMultiplePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul className="list-group list-group-flush">
        {posts.map((post)=>(
          <li key={post.id} className="list-group-item">{post.id} {post.title}</li>
        ))}
          
      </ul>
    </div>
  );
}
