import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import Dashboard from "./components/dashboard/index"
import Scoreboard from "./components/scoreboard/index"
import { textAlign } from '@mui/system';


function App() {
  let history = useHistory();

  return (
    <>

      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cricket Live ScoreBoard!!!</Navbar.Brand>
          <br />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { history.push("/") }}>ScoreBoard</Nav.Link>
          <br />
              <Nav.Link onClick={() => { history.push("/admin") }}>Admin Panel</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Switch>
        <Route exact path="/" component={Scoreboard} />
        <Route path="/admin" component={Dashboard} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
