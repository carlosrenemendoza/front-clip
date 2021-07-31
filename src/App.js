import './App.css';
import './style.scss';
import 'antd/dist/antd.css';
import Header from './components/Header';
// import Home from './components/Home';
import Creditcard from './components/Creditcard';
import 'semantic-ui-css/semantic.min.css'



function App() {
  return (
    <div   className="App">
      <Header />
      {/* <Home /> */}
      <Creditcard/>
    </div>
  );
}

export default App;
