import React from "react"
import { Link } from 'react-router-dom'
import "./Resources.scss";
import ListTemplate from "./ListTemplate";

const Resources = (props) => {
    console.log(props.match)

    return(
        <div className="background">
            <ListTemplate 
                match={props.match}
            />
        </div>
    )
}


export default Resources;