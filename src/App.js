import logo from './logo.svg';
import './App.css';
import {DemoComponent} from './components/DemoComponent';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <DemoComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
