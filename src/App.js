import logo from './logo.svg';
import './App.css';
//Importing Footer. Permanent element with Legal info
import Legal from './components/legal';
//Importing Routable Components
import Store from './components/store';
//Importing Bootstrap and Router DOM for client side routing
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//Set the background colour theme
document.body.style = 'background: #58A0EB;';

function App() {
  //Stores the gradient CSS data for the navbar
  const gradientBar = {
    background: 'linear-gradient(to right, #F05511, #9C0902)',
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/*Creating the Navbar, adding different page options and pointing where each option goes to*/}
        <Navbar style={gradientBar} data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">GotNoGames</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/store">Store</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
        <br/>
        {/*Telling which content to load depending on what page we are on (e.g DRAQ_Project1/store loads the store page HTML code)*/}
        <Routes>
          <Route path='/store' element={<Store></Store>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
