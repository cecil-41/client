import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function FetchDataById() {
    const [posts, setPosts] = useState([]);
    const [id, setID] = useState();
    const [buttonClickId, setButtonClickId] = useState("");

    const handleClick =()=>{
        setButtonClickId(id)
    }
  
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
        .then((res) => {
          console.log(res);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [buttonClickId]);
  
    return (
      <div>
        <input type="text" className="form-control my-3" required onChange={(e) => setID(e.target.value)} />
        <button className='btn btn-primary rounded-0' type='submit' value={id} onClick={handleClick}>Fetch a Post</button>
  
        <ul className="list-group list-group-flush">
            <li  className="list-group-item">
                {posts.id} <br /><br />
              {posts.title} <br /><br />
              {posts.body}
            </li>
        </ul>
      </div>
    );
}
