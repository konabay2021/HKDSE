import React, { Component } from "react";
import { connect } from "react-redux";
import {calFormula, checkBasicRequirements } from "../components/formula";
import { viewChosenSubject } from '../actions/index';
import { dataReducer } from '../actions/index';
import {modalState} from "../actions/index";
import { bindActionCreators } from "redux";
import Modal from "../components/Modal";
import "./AdmissionScoreTable.css"

class AdmissionScoreTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalDisplay: "none",
            modalContent: {},
            showSubject: true,
            reason: ""
        }
    }

    //Pass the subjects and scores that are chosen in different calculation formula to Action Creator to display to the user which subjects are selected
    eventHandler = (subject, callScore,modalContent,reason) => {
        if(reason === "" || reason === undefined){
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
        else {
            this.displayModal(modalContent,reason)
        }
    }

    //display modal when clicked
    displayModal = (modalContent,reason) => {
        this.props.modalState("block")
        document.body.classList.add('modal-open')
        this.setState({
            modalDisplay: "block",
            modalContent: modalContent,
            reason: reason
        })
    }

    closeModal = () => {
        this.props.modalState("none")
        document.body.classList.remove('modal-open');
        this.setState({
            modalDisplay: "none"
        })
    }


    // Render the admssion score table to the user, together to determine whether 
    // the inputted score is higher than the lower quartile of the admisson score
    renderList = () => {
        this.displayScoreData = this.props.uniData[this.props.school];
        let color;
        let yourScore = [];
        
        return this.displayScoreData.map((data, index) => {
            yourScore[index] = checkBasicRequirements(data.MinLevelRequired.toString(), this.props.callScore, data.ReqSub)
            if (typeof yourScore[index].score !== "string") {
                //set different university score calculation method to different formula
                yourScore[index] = calFormula(this.props.callScore, data.Method)
                yourScore[index].score >= data.MedianScore ? color = "green" : color = "red"
            }
            else {
                color = "black"
            }
            return (
                <tr
                    key={data.Code} id="admissionTable"
                >
                    <td className="tableDisable">{data.Code}</td>
                    <td className="tableCourse cellOnClick" onClick={(e) => this.displayModal(data, yourScore[index].reason)}>{data.Course}</td>
                    <td className="cellOnClick" onClick={(e) => this.displayModal(data,yourScore[index].reason)} >{data.Method}</td>
                    <td> {data.MedianScore} </td>
                    <td> {data.LQScore} </td>
                    <td className="cellOnClick" style={{ color: color }} onClick={(e) => this.eventHandler(yourScore[index].subject,this.props.callScore,data,yourScore[index].reason)}>{yourScore[index].score}</td>
                </tr>
            );
        });
    }

    render() {
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
                            reason={this.state.reason}
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
                        {this.renderList() } 
                    </tbody>
                </table>
            </div>

        )
    }
}

function mapStateToProps(state) {
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
        dataReducer: dataReducer,
        modalState: modalState
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AdmissionScoreTable);