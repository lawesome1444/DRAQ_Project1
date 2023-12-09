import logo from './logo.svg';
import './App.css';
//Importing Footer. Permanent element with Legal info
import Legal from './components/legal';
//Importing Bootstrap and Router DOM for client side routing
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Legal></Legal>
    </div>
  );
}

export default App;
