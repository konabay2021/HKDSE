import React from "react"
import { Link } from 'react-router-dom'
import "./NavBar.scss";

const NavBar = (props) => {



    return (
        <nav className="nav">
            <div className="container">
                <Link to="/" className="logoLink"><h6 className="logo" >HKDSE E-Learning Platform</h6></Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/tutorial" className="link">Tutorial</Link>
                <Link to="/input" className="link">Input</Link>
                <Link to="/resources" className="link">Resources</Link>
                <Link to="/QA" className="link" >QA</Link>
                <Link to="/Contact" className="link">Contact Us</Link>
            </div>
        </nav>

    )
}
export default NavBar;

