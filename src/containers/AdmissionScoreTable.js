import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {calFormula, checkBasicRequirements } from "../components/formula";
import { viewChosenSubject } from '../actions/index';
import { dataReducer } from '../actions/index';
import { bindActionCreators } from "redux";
import Modal from "../components/Modal"

class AdmissionScoreTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalDisplay: "none",
            modalContent: {},
            showSubject: true
        }
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/v1its')
            .then((response) => {
                this.props.dataReducer(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //Pass the subjects and scores that are chosen in different calculation formula to Action Creator to display to the user which subjects are selected
    eventHandler = (subject, callScore) => {
        this.setState({
            showSubject: !this.state.showSubject
        })
        if(this.state.showSubject){
            this.props.viewChosenSubject(subject, callScore)
        }
        else{
            this.props.viewChosenSubject([null],callScore)
        }
    }

    //display modal when clicked
    displayModal = (modalContent) => {
        this.setState({
            modalDisplay: "block",
            modalContent: modalContent
        })
    }

    closeModal = () => {
        this.setState({
            modalDisplay: "none"
        })
    }


    // Render the admssion score table to the user, together to determine whether 
    // the inputted score is higher than the lower quartile of the admisson score
    renderList = () => {
        switch (this.props.school) {
            case "HKU":
                this.displayScoreData = this.props.uniData.HKU;
                break;
            case "CUHK":
                this.displayScoreData = this.props.uniData.CUHK;
                break;
            case "HKUST":
                this.displayScoreData = this.props.uniData.HKUST;
                break;
            default:
                this.displayScoreData = this.props.uniData.HKU;
        }
        let color;
        let yourScore = [];
        // hku ust cu poly city have min. requirenment of 6 subject.
        yourScore[0] = checkBasicRequirements("332233", this.props.callScore)
        return this.displayScoreData.map((data, index) => {
            if (typeof yourScore[0].score !== "string") {
                //set different university score calculation method to different formula
                yourScore[index] = calFormula(this.props.callScore, data.Method)
            }
            else {
                yourScore[index] = yourScore[0]
            }
            yourScore[index].score >= data.LQScore ? color = "green" : color = "red"
            return (
                <tr
                    key={data.Code} id="admissionTable"
                >
                    <td className="tableDisable"> {data.Code} </td>
                    <td className="tableCourse cellOnClick" onClick={(e) => this.displayModal(data)}> {data.Course} </td>
                    <td className="cellOnClick" onClick={(e) => this.displayModal(data)} >{data.Method}</td>
                    <td> {data.MedianScore} </td>
                    <td> {data.LQScore} </td>
                    <td className="cellOnClick" style={{ color: color }} onClick={(e) => this.eventHandler(yourScore[index].subject, this.props.callScore)}>{yourScore[index].score}</td>

                </tr>
            );
        });
    }

    render() {
        const isEmpty = (obj) => {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }

       
        return (
            <div className="admissionTable paper" >
                {/* the modal */}
                {
                    this.state.modalDisplay === "block" &&
                    <div className="modalOutside">
                        <Modal
                            modalDisplay={this.state.modalDisplay}
                            closeModal={this.closeModal}
                            modalContent={this.state.modalContent}
                        />
                    </div>
                }
                {/* the admission table */}
                <h4 className="tableTitle">Admission Table:</h4>
                <table>
                    <thead>
                        <tr>
                            <th className="tableDisable">Jupas Code</th>
                            <th className="tableCourse">Course</th>
                            <th>Method</th>
                            <th>Median</th>
                            <th>LQ</th>
                            <th className="tableScore">Your Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isEmpty(this.props.uniData) ? null : this.renderList() } 
                    </tbody>
                </table>
            </div>

        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        callScore: state.callScore,
        uniData: state.uniData
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({
        viewChosenSubject: viewChosenSubject,
        dataReducer: dataReducer
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AdmissionScoreTable);