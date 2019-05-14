import React, { Component } from "react";
import { connect } from "react-redux";
import AdmissionScoreTable from "./AdmissionScoreTable";
import * as formula from "../components/formula";
import { link } from "../data/jsonLink"
import { calScore } from '../actions/index'
import { viewChosenSubject } from '../actions/index'
import { dataReducer } from '../actions/index';
import { bindActionCreators } from "redux";
import axios from "axios";
import "./Result.scss"

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: "HKU",
            data: "",
            edit: false,
            link: link.HKU,
            showScoreTable: true
        };
    }

    componentDidMount() {
        axios.get(this.state.link)
            .then((response) => {
                this.props.dataReducer(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.link !== prevState.link) {
            axios.get(this.state.link)
                .then((response) => {
                    this.props.dataReducer(response.data)
                    this.setState({
                        finishLoading: !this.state.finishLoading
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    //submit the user editted score to action creator
    handleFormSubmit = (event) => {
        this.props.callScore.map((data, index) => {
            return data.score = parseInt(event.target[index].value, 10)
        })
        this.props.calScore(this.props.callScore)
        event.preventDefault();
        this.setState({ edit: !this.state.edit });
    }


    // display the form for user to edit their score when certain button is clicked
    handleEditClick = () => {
        this.setState({ edit: !this.state.edit });
    }
    // det which uni score will be rendered to the screen when certain button is clicked
    handleClick = (uni) => {
        this.setState({
            render: uni,
            link: link[uni]
        });
    }

    //Pass the subjects and scores that are chosen in different calculation formula to Action Creator to display to the user which subjects are selected
    viewSubjectHandler = (subject, callScore) => {
        this.props.viewChosenSubject1(subject, callScore)
    }

    //Lod the AdmissonScoreTable when the state are changed
    loadUniDataTable = () => {
        return (
            <AdmissionScoreTable
                school={this.state.render} />
        );
    }

    scoreConverter = (score) => {
        switch (score) {
            case 7:
                return "5**"
            case 6:
                return "5*"
            default:
                return score;
        }
    }

    //dynamically load the user's inputted score
    loadInputScore = () => {
        return this.props.callScore.map((data, index) => {
            return (
                <tr className="scoreTableTr" key={data.subject} style={{ backgroundColor: this.props.viewChosenSubject[index] }}>
                    <td ><h6>{data.subject}</h6></td>
                    <td><h6>{this.scoreConverter(data.score)}</h6></td>
                </tr>
            )
        })
    }

    //Load a table for the user to edit their inputted score when the button "edit" is clicked
    loadEditScore = () => {
        let name = ["chiScore", "engScore", "mathScore", "lsScore", "el1Score", "el2Score", "el3Score"]
        return this.props.callScore.map((data, index) => {
            return (
                <tr className="scoreTableTr" key={data.subject}>
                    <td ><h6>{data.subject}</h6></td>
                    <td>
                        <select className="form-control" name={name[index]} defaultValue={data.score}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">5*</option>
                            <option value="7">5**</option>
                        </select>
                    </td>
                </tr>
            )
        })
    }

    isEmpty = (obj) => {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    // the score table that display the user inputted score
    scoreTable = () => {
        const { showScoreTable } = this.state
        return (
            <div className="scoreTable paper">
                <button
                    className="btn btn-info showButton"
                    onClick={() => this.setState({ showScoreTable: !showScoreTable })}>
                    <span>{showScoreTable ? "Close" : "Open"} Score Table</span>
                </button>
                <div style={{ display: showScoreTable ? "block" : "none" }}>
                    <h4 className="tableTitle">Score Table:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.loadInputScore()}
                        </tbody>
                    </table>

                    <h5 className="tableTitle cellOnClick" onClick={(e) => this.viewSubjectHandler(formula.cal4CXX(this.props.callScore, "4C2X").subject, this.props.callScore)} >4C 2X: {formula.cal4CXX(this.props.callScore, "4C2X").score} </h5>
                    <h5 className="tableTitle cellOnClick" onClick={(e) => this.viewSubjectHandler(formula.calBest5(this.props.callScore).subject, this.props.callScore)} >Best 5: {formula.calBest5(this.props.callScore).score} </h5>
                    <button className="btn btn-secondary changeButton" onClick={() => this.props.history.push("/")}>Back To Home Page</button>
                    <button className="btn btn-secondary changeButton" onClick={this.handleEditClick}>Change Input Score</button>
                    <button className="btn btn-light schoolButton" onClick={(e) => this.handleClick(("HKU"))}>HKU</button>
                    <button className="btn btn-light schoolButton" onClick={(e) => this.handleClick(("CUHK"))}>CUHK</button>
                    <button className="btn btn-light schoolButton" onClick={(e) => this.handleClick(("HKUST"))}>HKUST</button>
                    <button className="btn btn-light schoolButton" onClick={(e) => this.handleClick(("POLYU"))}>POLYU</button>
                    <button className="btn btn-light schoolButton" onClick={(e) => this.handleClick(("CITYU"))}>CITYU</button>
                    <button className="btn btn-light schoolButton" onClick={(e) => this.handleClick(("BUHK"))}>BUHK</button>
                    <button className="btn btn-light schoolButton" onClick={(e) => this.handleClick(("LINGU"))}>LINGU</button>
                    <button className="btn btn-light schoolButton" onClick={(e) => this.handleClick(("EDUHK"))}>EDUHK</button>
                </div>
            </div>
        )
    }

    // the table that allows the user to edit and submit the score again
    editScoreTable = () => {
        return (
            <div className="scoreTable paper">
                <h4 className="tableTitle">Score Table:</h4>
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <table>
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.loadEditScore()}
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-info submitButton" id="submitButton">Submit</button>
                </form>

                {/* <button className="btn changeButton" onClick={(e) => this.handleClick(("ChangeScore"))}>Cancel</button> */}

            </div>
        )

    }


    render() {
        return (
            <div className="gridContainer">
                {this.state.edit === false ? <div>{this.scoreTable()}</div> : <div>{this.editScoreTable()}</div>}
                {this.isEmpty(this.props.uniData[this.state.render]) ? <h4 className="loading">Loading...</h4> : this.loadUniDataTable()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        callScore: state.callScore,
        viewChosenSubject: state.viewChosenSubject,
        uniData: state.uniData,
        modalState: state.modalState
    };
}


function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({
        viewChosenSubject1: viewChosenSubject,
        calScore: calScore,
        dataReducer: dataReducer
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Result);