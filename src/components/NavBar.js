import React from "react"
import { Link } from 'react-router-dom'
import "./NavBar.scss";

const NavBar = () => {
    const showList = () => {
        var x = document.getElementById("container");
        if (x.style.display !== "block") {
            x.style.display = "block"
        } else {
            x.style.display = "none"
        }
    }
    const hideList = () => {
        var x = document.getElementById("container");
            x.style.display = "none"
    }
 
        return (
            <nav className="nav">
                 <a onClick={showList} className="icon mobileDisplay">
                    <i className="fa fa-2x fa-bars"></i>
                </a>
                <Link to={`${process.env.PUBLIC_URL}/`} className="logoLink"><h6 className="logo mobileDisplay" >HKDSE E-Learning Platform</h6></Link>
             
                <div className="container" id="container">
                    <Link onClick={hideList} to={`${process.env.PUBLIC_URL}/`} className="logoLink"><h6 className="logo displayNone" >HKDSE E-Learning Platform</h6></Link>
                    <Link onClick={hideList} to={`${process.env.PUBLIC_URL}/`} className="link">Home</Link>
                    {/* <Link onClick={hideList} to={`${process.env.PUBLIC_URL}/tutorial`} className="link">Tutorial</Link> */}
                    <Link onClick={hideList} to={`${process.env.PUBLIC_URL}/input`} className="link">Input</Link>
                    <Link onClick={hideList} to={`${process.env.PUBLIC_URL}/resources`} className="link">Resources</Link>
                    {/* <Link onClick={hideList} to={`${process.env.PUBLIC_URL}/qa`} className="link" >QA</Link>
                    <Link onClick={hideList} to={`${process.env.PUBLIC_URL}/contact`} className="link">Contact Us</Link> */}
                </div>
            </nav>
        )
}
export default NavBar;

