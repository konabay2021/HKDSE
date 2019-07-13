import React from "react"
import { Link } from 'react-router-dom'
import "./Resources.scss";
import ListTemplate from "./ListTemplate";
import Footer from "../components/Footer"
const Resources = (props) => {
    console.log(props.match)

    return (
        <React.Fragment>
            <div className="background">
                <ListTemplate
                    match={props.match}
                />
            </div>
            <Footer />
        </React.Fragment>
    )
}


export default Resources;