import { Link } from 'react-router-dom'
import React from "react";
import { allPlayList } from "../data/playlist.json"
import { usefulLinks } from "../data/usefulLinks.json"
import "./ListTemplate.scss"
const listTemplate = (props) => {

    const showLeftList = (page) => {
        let list = [];
        if (page === "tutorial")
            list = Object.keys(allPlayList)
        else
            list = Object.keys(usefulLinks)

        return (
            <React.Fragment>
                <ul className="leftList">
                    <li className="leftListItem"><p>{page === "tutorial" ? "Available Subjects:" : "Category"}</p></li>
                    {list.map(e => {
                        return (
                            <li key={e} className="leftListItem">
                                <Link className="link" to={{
                                    pathname: `/${page}/${e}`,
                                }}
                                ><p>{e}</p></Link>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }

    const showRightList = (page) => {
        let list = [];

        if (page === "tutorial")
            list = allPlayList[props.match.url.split("/")[2]]
        else
            list = usefulLinks[props.match.url.split("/")[2]]
        return (
            <React.Fragment>
                <ul className="rightList">
                    <li className="rightListItem"><p>Topics:</p></li>
                    {list.map(e => {
                        return (
                            <li key={e.id || e.name} className="rightListItem">
                                {page === "tutorial" ? <Link className="link"
                                    to={{
                                        pathname: `${props.match.url}/${e.name}`,
                                        // state: {
                                        //     subject: props.match.url.split("/")[2],
                                        //     id: e.id
                                        // }
                                    }} ><p>{e.name}</p></Link> : <a className="link" href={`${e.url}`} target="_blank"><p>{e.name}</p></a>}
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }





    return (
        <div className="listContainer">
            <div className="leftListContainer">
                {(props.match.path === "/resources" || props.match.path === "/resources/:topicId") && showLeftList("resources")}
                {(props.match.path === "/tutorial" || props.match.path === "/tutorial/:topicId") && showLeftList("tutorial")}
            </div>
            <div className="rightListContainer">
                {props.match.path === "/resources/:topicId" && showRightList("resources")}
                {props.match.path === "/tutorial/:topicId" && showRightList("tutorial")}
            </div>
        </div>

    )
}

export default listTemplate;