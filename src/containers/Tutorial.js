import React, { Component } from "react";
import "./Tutorial.scss";
import { allPlayList } from "../data/playlist.json"
import Footer  from "../components/Footer"
import ListTemplate from "../components/ListTemplate"
class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: false,
            des: false,
            id: ""
        };
    }
    
    renderPlayList = async () => {
        const urlPara = this.props.match.url.split("/")
        const subjectPlaylist = allPlayList[urlPara[urlPara.length-2]]
        let id = subjectPlaylist.find((e) => {
            if (e.name === urlPara[urlPara.length-1])
                return e
        })
        const config = {
            method: 'GET',
            mode: 'cors',
        };
        const api_key = process.env.REACT_APP_APIKEY
        const base_url = 'https://www.googleapis.com/youtube/v3';
        let url = `${base_url}/playlistItems?&part=snippet&playlistId=${id.id}&maxResults=30&key=${api_key}`;
        const result = await fetch(url, config);
        const playlist = await result.json();
        if(playlist.error){
            alert("Youtube API Error Occurs, We apologize for any inconvenience")
            window.location.href = "https://justinsochi.github.io/HKDSE/tutorial";

        }
        else{
            this.setState({ playlist })
            this.setState({ id: playlist.items[0].snippet.resourceId.videoId, des: playlist.items[0].snippet.description })
            this.showPlayList()
        }
        
    }

    showPlayList = () => {
        let { playlist } = this.state
        // console.log(playlist)
        if (playlist && playlist.items)
            return (
                <ul className="playlistContainer">
                    {playlist.items.map(e => {
                        return (
                            <li className="playlist" key={e.snippet.resourceId.videoId} onClick={() => this.onClickEventHandler(e)}>
                                <img src={e.snippet.thumbnails.default.url}></img>
                                <p>{e.snippet.title}</p>
                            </li>)
                    })
                    }
                </ul >
            )
    }

    onClickEventHandler = (e) => {   
        if (window.innerWidth < 1024){
            window.scroll(0,0)
        }
        this.setState({ id: e.snippet.resourceId.videoId, des: e.snippet.description })
    }


    fetchvideo = () => {
        let { id, des } = this.state
        return (
            <React.Fragment>
                <div className="videoPlayer embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${id}`} />
                </div>
                <div className="des">
                    <p>{des}</p>
                </div>
            </React.Fragment>

        )
    }



    async componentDidMount() {
        window.scroll(0,0)
        this.props.match.path === `${process.env.PUBLIC_URL}/tutorial/:topicId/:topicId` && this.renderPlayList()
        // next page: add  "&pageToken=" +nextPageToken
    }
    render() {
        // console.log(process.env.PUBLIC_URL, this.props.match.path)
        let {
            playlist,
        } = this.state
        let { match } = this.props
        return (
            <div className="background">
                {/* <h1>{this.props.match.params.topicId}</h1> */}
                {match.path !== `${process.env.PUBLIC_URL}/tutorial/:topicId/:topicId` && 
                    <ListTemplate 
                        match={match}
                    />}
                

                {match.path === `${process.env.PUBLIC_URL}/tutorial/:topicId/:topicId` && 
                <div className="tutorialContainer">
                    <div className="leftMenu">
                        {this.showPlayList()}
                    </div>
                    <div className="rightMedia">
                        {this.fetchvideo()}

                    </div>
                </div>
                }
                <Footer/>
            </div>

        )
    }
}

export default Tutorial
