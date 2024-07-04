import logo from './logo.svg';
import profile from '../src/imgs/Headshot photo.png'
import './App.css';
import {DemoComponent} from './components/DemoComponent';
import TitleComponent from './components/TitleComponent';
import ClickEventHandler from './components/ClickEventHandler'
import UserLogin from './components/UserLogin';
import EmployeeList from './components/EmployeeList';


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
          <UserLogin/>
          {/* <EmployeeList/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
