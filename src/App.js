import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Container} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
    const [title, setTitle] = useState('Alan');
    let head = [
        {title:'Home', path:'/'},
        {title:'About', path:'/about'},
        {title:'Contact', path:'/contact'},
    ]
    const [headerLinks, setHeaderLinks] = useState(head);
    const [home, setHome] = useState({title:'Alan Pallath'})
    const [about, setAbout]  = useState({title:'About Me'})
    console.log(headerLinks)
  return (
        <Router>
            <Container className="p-0" fluid={true}>
                <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand>Alan Pallath</Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
                <Route path="/" exact render={() => <HomePage title={home.title} subTitle={home.subTitle} text={home.text} />} />
                <Route path="/about" render={() => <AboutPage title={about.title} />} />
                <Footer/>
            </Container>
        </Router>
  );
}

export default App;
