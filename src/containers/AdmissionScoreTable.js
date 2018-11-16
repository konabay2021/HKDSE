import React, { Component } from "react";
import { connect } from "react-redux";
import * as formula from "../components/formula";
import { viewChosenSubject } from '../actions/index'
import { bindActionCreators } from "redux";
import Modal from "../components/Modal"

class AdmissionScoreTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalDisplay: "none",
            MethodDetails: ""
        }

    }



    eventHandler = (subject, callScore) => {
        this.props.viewChosenSubject(subject, callScore)
    }

    displayModal = (MethodDetails) => {
        this.setState({
            modalDisplay: "block",
            MethodDetails: MethodDetails
        })
    }

    modalContent = (MethodDetails) => {
        return (
            <div>{MethodDetails}</div>
        )
    }


    closeModal = () => {
        this.setState({
            modalDisplay: "none"
        })
    }



    renderList = () => {
        switch (this.props.school) {
            case "HKU":
                this.displayScoreData = this.props.hkuData;
                break;
            case "CUHK":
                this.displayScoreData = this.props.cuhkData;
                break;
            case "HKUST":
                this.displayScoreData = this.props.hkustData;
                break;
            default:
                this.displayScoreData = this.props.hkuData;
        }
        let color;
        let yourScore=[];
         // hku ust cu poly city have min. requirenment of 6 subject.
         yourScore[0] = formula.checkBasicRequirements("332233", this.props.callScore)
        return this.displayScoreData.map((data, index) => {
           
           
            if (typeof yourScore[0].score !== "string") {
                switch (data.Method) {
                    case "Best 5":
                    yourScore[index] = formula.calBest5(this.props.callScore)
                        break;
                    case "4C2X":
                    yourScore[index] = formula.cal4C2X(this.props.callScore)
                        break;
                    case "Best 6":
                    yourScore[index] = formula.calBest6(this.props.callScore)
                        break;
                    case "UST A":
                    yourScore[index] = formula.ustA(this.props.callScore)
                        break;
                    case "UST B":
                    yourScore[index] = formula.ustB_I(this.props.callScore, "UST B")
                        break;
                    case "UST C":
                    yourScore[index] = formula.ustC(this.props.callScore)
                        break;
                    case "UST D":
                    yourScore[index] = formula.ustD(this.props.callScore)
                        break;
                    case "UST E":
                    yourScore[index] = formula.ustE(this.props.callScore)
                        break;
                    case "UST F":
                    yourScore[index] = formula.ustF(this.props.callScore)
                        break;
                    case "UST G":
                    yourScore[index] = formula.ustG(this.props.callScore)
                        break;
                    case "UST H":
                    yourScore[index] = formula.ustH(this.props.callScore)
                        break;
                    case "UST I":
                    yourScore[index] = formula.ustB_I(this.props.callScore, "UST I")
                        break;

                    default:
                    yourScore[index] = "Err"
                }
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
                    <td className="tableCourse cellOnClick" onClick={(e) => this.displayModal(data.MinLevelRequired)}> {data.Course} </td>
                    <td className="cellOnClick" onClick={(e) => this.displayModal(data.MinLevelRequired)} >{data.Method}</td>
                    <td> {data.MedianScore} </td>
                    <td> {data.LQScore} </td>
                    <td className="cellOnClick" style={{ color: color }} onClick={(e) => this.eventHandler(yourScore[index].subject, this.props.callScore)}>{yourScore[index].score}</td>

                </tr>
            );
        });
    }

    render() {
        
        return (
            <div className="admissionTable paper" >
                {
                    this.state.modalDisplay === "block" &&
                    <div className="modalOutside">
                        <Modal
                            modalDisplay={this.state.modalDisplay}
                            closeModal={this.closeModal}
                            MethodDetails={this.state.MethodDetails}
                            modalContent={this.modalContent} />
                    </div>
                }

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
                        {this.renderList()}
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
        hkuData: state.hkuData,
        cuhkData: state.cuhkData,
        hkustData: state.hkustData
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ viewChosenSubject: viewChosenSubject }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AdmissionScoreTable);