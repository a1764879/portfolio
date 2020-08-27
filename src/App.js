import React, {useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Container} from "react-bootstrap";

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
    const [contact, setContact] = useState({title: 'Let\'s talk'})
    console.log(headerLinks)
  return (
        <Router>
            <Container fluid={false}>
                <p>Hi</p>

            </Container>
        </Router>
  );
}

export default App;
