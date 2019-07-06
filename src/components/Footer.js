import React from "react"
import { Link } from 'react-router-dom'
import "./Footer.scss"

const Footer = (props) => {

    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="left">
                    <p>Created by Justin So</p>
                </div>
                <div className="middle">
                    <Link to="/Contact" className="link"><p>Contact Us</p></Link>
                    <a href="https://www.linkedin.com/in/justin-so-4599bb162/"><p>Find me on  <img src="https://i.imgur.com/l81g6FS.png" alt="linkedin"></img></p></a>
                </div>
                <div className="right">
                    <a href="https://github.com/justinsochi/HKDSE"><p>Source Code</p></a>
                    <a href="https://justinsochi.github.io/"><p>My Personal Page</p></a>

                </div>
            </div>

        </div>
    )
}

export default Footer;