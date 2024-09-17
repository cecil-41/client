import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UseStateDataFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/3")
      .then((response) => {
        setIsLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setIsLoading(false);
        setPost({});
        setError("Oops... something went wrong!");
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        "data is loading"
      ) : (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {post.id} <br />
            <br />
            {post.title} <br />
            <br />
            {post.body}
          </li>
        </ul>
      )}
        {
            error? error: null
        }
    </div>
  );
}
