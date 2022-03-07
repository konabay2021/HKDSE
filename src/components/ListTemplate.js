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
                                    pathname: `${process.env.PUBLIC_URL}/${page}/${e}`,
                                }}
                                ><p>{e}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }

    const showRightList = (page) => {
        let list = [];
        let urlPara = props.match.url.split("/")
        if (page === "tutorial")
            list = allPlayList[urlPara[urlPara.length-1]]
        else
            list = usefulLinks[urlPara[urlPara.length-1]]
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
                                    }} ><p>{e.name}</p></Link> : <a className="link" href={e.url} target="_blank"><p>{e.name}</p></a>}
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }



    console.log(process.env.PUBLIC_URL)

    return (
        <div className="listContainer">
            <div className="leftListContainer">
                {(props.match.path === `${process.env.PUBLIC_URL}/resources` || props.match.path === `${process.env.PUBLIC_URL}/resources/:topicId`) && showLeftList("resources")}
                {(props.match.path === `${process.env.PUBLIC_URL}/tutorial` || props.match.path === `${process.env.PUBLIC_URL}/tutorial/:topicId`) && showLeftList("tutorial")}
            </div>
            <div className="rightListContainer">
                {props.match.path === `${process.env.PUBLIC_URL}/resources/:topicId` && showRightList("resources")}
                {props.match.path === `${process.env.PUBLIC_URL}/tutorial/:topicId` && showRightList("tutorial")}
            </div>
        </div>

    )
}

export default listTemplate;