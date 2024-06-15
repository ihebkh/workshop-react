// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';
import User from './components/User';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const App = () => {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/users">Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes>
                <Route path="/" element={<h1>Welcome to My App</h1>} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<User />} />
                <Route path="/users/:id/edit" element={<UpdateUser />} />
                <Route path="/users/:id/delete" element={<DeleteUser />} />
            </Routes>
        </Router>
    );
};

export default App;
