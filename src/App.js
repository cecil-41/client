import logo from "./logo.svg";
import profile from "../src/imgs/Headshot photo.png";
import "./App.css";
import { DemoComponent } from "./components/DemoComponent";
import ClickEventHandler from "./components/ClickEventHandler";
import UserLogin from "./components/UserLogin";
import EmployeeList from "./components/EmployeeList";
import RegularStyleSheet from "./components/styling/RegularStyleSheet";
import Inline from "./components/styling/Inline";
import CSSModule from "./components/styling/CSSModule";
import FormInput from "./components/useState/FormInput";
import Counter from "./components/useState/Counter";
import Objects from "./components/useState/Objects";
import HookStateArray from "./components/useState/HookStateArray";
import UseEffectExample1 from "./components/useEffect/useEffect";
import { UseEffectExample2 } from "./components/useEffect/useEffect";
import FetchMultiplePosts from "./components/dataFetching/FetchMultiplePosts";
import FetchDataById from "./components/dataFetching/FetchDataById";
import ComponentX from "./components/useContext/ComponentX";
import MyCounter from "./components/useReducer/MyCounter";
import React from "react";

export const PriceContext = React.createContext();
export const ItemContext = React.createContext();

function App() {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-md-10 mt-5">
          {/* <DemoComponent name='Cecil Bennett' country='South Africa'>
            <h1 className='text-primary'>I am fullstack developer</h1>
            <img className='img-fluid w-25' src={profile} alt=''></img>
            <TitleComponent/>
          </DemoComponent> */}
          {/* <ClickEventHandler/> */}
          {/* <UserLogin/> */}
          {/* <EmployeeList/> */}
          {/* <RegularStyleSheet className={true}/> */}
          {/* <Inline/> */}
          {/* <CSSModule/> */}
          {/* <FormInput/> */}
          {/* <Counter/> */}
          {/* <Objects/> */}
          {/* <HookStateArray/> */}
          {/* <UseEffectExample1 /> */}
          {/* <UseEffectExample2/> */}
          {/* <FetchMultiplePosts/> */}
          {/* <FetchDataById/> */}
          {/* <PriceContext.Provider value={"R200"}>
            <ItemContext.Provider value={"Samsung"}>
              <ComponentX />
            </ItemContext.Provider>
          </PriceContext.Provider> */}
          <MyCounter/>
        </div>
      </div>
    </div>
  );
}

export default App;
