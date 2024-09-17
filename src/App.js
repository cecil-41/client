import "./App.css";
import React, { useReducer } from "react";
import ComponentA from "./components/useContextWithReducer/ComponentA";
import ComponentB from "./components/useContextWithReducer/ComponentB";
import ComponentC from "./components/useContextWithReducer/ComponentC";
import UseStateDataFetch from "./components/useStateAndUseReducer/UseStateDataFetch";
import UseReducerDataFetch from "./components/useStateAndUseReducer/UseReducerDataFetch";
import UseCallBack from "./components/useCallBack/UseCallBack";
import MemoCounter from "./components/useMemoPractice/MemoCounter";
import FocusInput from "./components/useRef/FocusInput";
import Timer from "./components/useRef/Timer";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-md-10 mt-5">
          {/* <UseReducerDataFetch/> */}
          {/* <UseCallBack/> */}
          {/* <MemoCounter /> */}
          <Timer/>
        </div>
      </div>
    </div>
  );
}

export default App;
