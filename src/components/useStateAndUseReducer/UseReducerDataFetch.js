import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    isLoading: true,
    error: "",
    post: {}
}

const reducer =(state, action)=>{
    switch(action.type){
        case "DATA_FETCH_SUCCESS":
            return{
                isLoading: false,
                post: action.payload,
                error: ""
            }
        case "DATA_FETCH_ERROR":
            return{
                isLoading: false,
                post: {},
                error: "Ooops... something went wrong!"
            }
        default:
            return state
    }
}


export default function UseReducerDataFetch() {
    const[state, disaptch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/3")
          .then((response) => {
            disaptch({type: "DATA_FETCH_SUCCESS", payload: response.data})
          })
          .catch((error) => {
            disaptch({type: "DATA_FETCH_ERROR"})
          });
      }, []);
    
  return (
    <div>
      {state.isLoading ? (
        "data is loading"
      ) : (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {state.post.id} <br />
            <br />
            {state.post.title} <br />
            <br />
            {state.post.body}
          </li>
        </ul>
      )}
        {
            state.error? state.error: null
        }
    </div>
  )
}
