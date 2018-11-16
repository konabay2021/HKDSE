import React, { Component } from "react";
import { connect } from "react-redux";
import AdmissionScoreTable from "./AdmissionScoreTable";
import * as formula from "../components/formula";
import { calScore } from '../actions/index'
import { viewChosenSubject } from '../actions/index'
import { bindActionCreators } from "redux";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: "HKU",
            edit: false
        };
    }

    handleFormSubmit = (event) => {
        this.props.callScore.map((data, index) => {
            data.score = parseInt(event.target[index].value, 10)
        })
        this.props.calScore(this.props.callScore)
        event.preventDefault();
        this.setState({ edit: !this.state.edit });
    }

    handleClick = (e) => {
        switch (e) {
            case "HKU":
                this.setState({ render: "HKU" });
                break;
            case "CUHK":
                this.setState({ render: "CUHK" });
                break;
            case "HKUST":
                this.setState({ render: "HKUST" });
                break;
            case "ChangeScore":
                this.setState({ edit: !this.state.edit });
                break;
        }
    }

    viewSubjectHandler = (subject, callScore) => {
        this.props.viewChosenSubject1(subject, callScore)
    }

    loadUniDataTable = () => {
        switch (this.state.render) {
            case "HKU":
                return (
                    <AdmissionScoreTable
                        school="HKU" />
                );
            case "CUHK":
                return (
                    <AdmissionScoreTable
                        school="CUHK" />
                );
            case "HKUST":
                return (
                    <AdmissionScoreTable
                        school="HKUST" />
                );
            default:
                break;
        }
    }

    loadInputScore = () => {
        return this.props.callScore.map((data, index) => {
            return (
                <tr className="scoreTableTr" key={data.subject} style={{ backgroundColor: this.props.viewChosenSubject[index] }}>
                    <td ><h6>{data.subject}</h6></td>
                    <td><h6>{data.score}</h6></td>
                </tr>
            )
        })
    }

    loadEditScore = () => {
        let name = ["chiScore", "engScore", "mathScore", "lsScore", "el1Score", "el2Score", "el3Score"]
        return this.props.callScore.map((data, index) => {
            return (
                <tr className="scoreTableTr" key={data.subject}>
                    <td ><h6>{data.subject}</h6></td>
                    <td>
                        <select className="form-control" name={name[index]} defaultValue={data.score}>
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                            <option value="6" >5*</option>
                            <option value="7" >5**</option>
                        </select>
                    </td>
                </tr>
            )
        })
    }

    render() {
        let scoreTable = (
            <div class="scoreTable paper">
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


                <h5 className="tableTitle cellOnClick" onClick={(e) => this.viewSubjectHandler(formula.cal4C2X(this.props.callScore).subject, this.props.callScore)} >4C 2X: {formula.cal4C2X(this.props.callScore).score} </h5>
                <h5 className="tableTitle cellOnClick" onClick={(e) => this.viewSubjectHandler(formula.calBest5(this.props.callScore).subject, this.props.callScore)} >Best 5: {formula.calBest5(this.props.callScore).score} </h5>
                <button className="btn  changeButton" onClick={(e) => this.handleClick(("ChangeScore"))}>Change Input Score</button>
                <button className="btn  schoolButton" onClick={(e) => this.handleClick(("HKU"))}>HKU</button>
                <button className="btn  schoolButton" onClick={(e) => this.handleClick(("CUHK"))}> CUHK</button>
                <button className="btn  schoolButton" onClick={(e) => this.handleClick(("HKUST"))}> HKUST</button>
            </div>
        )

        let editScoreTable = (
            <div class="scoreTable paper">
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

                <button className="btn  changeButton" onClick={(e) => this.handleClick(("ChangeScore"))}>Cancel</button>

            </div>
        )

        return (
            <div className="gridContainer">
                {this.state.edit === false ? <div>{scoreTable}</div> : <div>{editScoreTable}</div>}
                {this.loadUniDataTable()}
            </div>



        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        callScore: state.callScore,
        viewChosenSubject: state.viewChosenSubject
    };
}


function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({
        viewChosenSubject1: viewChosenSubject,
        calScore: calScore
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Result);