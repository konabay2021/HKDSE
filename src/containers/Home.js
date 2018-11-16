import React, { Component } from "react";
import { connect } from "react-redux";
import { calScore } from '../actions/index'
import { bindActionCreators } from "redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidSubjectInput: null,
      Elective2: "",
      selected2: "",
      Elective3: "",
      selected3: "",
    }
  }

  handleFormSubmit = (event) => {
    if (event.target.el1.value == event.target.el2.value || event.target.el2.value == event.target.el3.value || event.target.el1.value == event.target.el3.value) {
      this.setState({
        invalidSubjectInput: "Elective Should Not Be The Same!"
      })
    }
    else {
      var inputScore = [
        { subject: "Chinese", score: parseInt(event.target.chiScore.value, 10) },
        { subject: "English", score: parseInt(event.target.engScore.value, 10) },
        { subject: "Maths", score: parseInt(event.target.mathScore.value, 10) },
        { subject: "LS", score: parseInt(event.target.lsScore.value, 10) },
        { subject: event.target.el1.value, score: parseInt(event.target.el1Score.value, 10) }
      ]
      if (event.target.el2.value != "noEl2") {
        inputScore.push({ subject: event.target.el2.value, score: parseInt(event.target.el2Score.value, 10) })
      }
      if (event.target.el3.value != "noEl3") {
        inputScore.push({ subject: event.target.el3.value, score: parseInt(event.target.el3Score.value, 10) })
      }

      this.props.calScore(inputScore)
      
      this.props.history.push("/result");
    }
    event.preventDefault();

  }

  radioOnclick = (e) => {
    switch (e) {
      case 1:
        this.setState({
          Elective2: "disabled",
          selected2: "selected",
          Elective3: "disabled",
          selected3: "selected"
        })
        break;
      case 2:
        this.setState({
          Elective2: "",
          selected2: "",
          Elective3: "disabled",
          selected3: "selected"
        })
        break;
      case 3:
        this.setState({
          Elective2: "",
          selected2: "",
          Elective3: "",
          selected3: ""
        })
        break;
    }

    console.log()
  }



  render() {
    return (
      <div>
        <h2 className="homeTitle">Start By Inputting Your DSE Score: </h2>
        <div className="homeContainer">

          <h1 className="homeTitle">{this.state.invalidSubjectInput}</h1>

          <form className="homeInnerContainer" onSubmit={this.handleFormSubmit.bind(this)}>

            <div id="homeRadio" class="btn-group btn-group-toggle" data-toggle="buttons" >
              <label className="btn btn-secondary " for="4C1X" onClick={() => this.radioOnclick(1)}>
                <input type="radio" name="totalEl" id="4C1X" />4C1X
              </label>

              <label className=" btn btn-secondary" for="4C2X" onClick={() => this.radioOnclick(2)}>
                <input type="radio" name="totalEl" id="4C2X" />4C2X
              </label>

              <label className=" btn btn-secondary active" for="4C3X" onClick={() => this.radioOnclick(3)}>
                <input type="radio" name="totalEl" id="4C3X" />4C3X
              </label>
            </div>
            <br />



            <label className=" label1 control-label" for="chi">Chinese</label>
            <select className="select1 form-control" id="chi" name="chiScore">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">5*</option>
              <option value="7">5**</option>
            </select>
            <label className="label3 control-label" for="eng">English</label>
            <select className="select3 form-control" id="eng" name="engScore">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">5*</option>
              <option value="7">5**</option>
            </select>
            <label className="label5 control-label" for="math">Mathematics </label>
            <select className="select5 form-control" id="math" name="mathScore">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">5*</option>
              <option value="7">5**</option>
            </select>
            <label className="label7 control-label" for="lsScore">Liberal Study </label>
            <select className="select7 form-control" id="lsScore" name="lsScore">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">5*</option>
              <option value="7">5**</option>
            </select>



            <label className=" labelEL control-label">Electives:</label>
            <select className="label2 form-control" id="el1" name="el1">
              <option value="bio">Biology</option>
              <option value="bafs">Business, Accounting and Financial Studies</option>
              <option value="chem">Chemistry</option>
              <option value="chist">Chinese History</option>
              <option value="chiLit">Chinese Literature</option>
              <option value="desi">Design and Applied Technology</option>
              <option value="econ">Economics</option>
              <option value="ers">Ethics and Religious Studies</option>
              <option value="geog">Geography</option>
              <option value="hmsc">Health Management and Social Care</option>
              <option value="hist">History</option>
              <option value="ict">Information and Communication Technology</option>
              <option value="englit">Literature in English</option>
              <option value="m1/m2">Mathematics M1/M2</option>
              <option value="musc">Music</option>
              <option value="pe">Physical Education</option>
              <option value="phy">Physics</option>
              <option value="sciCom">Science: Combined Science</option>
              <option value="sciInt">Science: Integrated Science</option>
              <option value="tech">Technology and Living</option>
              <option value="ths">Tourism and Hospitality Studies</option>
              <option value="va">Visual Arts</option>
            </select>
            <select className="elBreak select2 form-control" name="el1Score">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">5*</option>
              <option value="7">5**</option>
            </select>

            <select className="label4 form-control" id="el2" name="el2" disabled={this.state.Elective2}>
              <option value="bio" >Biology</option>
              <option value="bafs">Business, Accounting and Financial Studies</option>
              <option value="chem">Chemistry</option>
              <option value="chist">Chinese History</option>
              <option value="chiLit">Chinese Literature</option>
              <option value="desi">Design and Applied Technology</option>
              <option value="econ">Economics</option>
              <option value="ers">Ethics and Religious Studies</option>
              <option value="geog">Geography</option>
              <option value="hmsc">Health Management and Social Care</option>
              <option value="hist">History</option>
              <option value="ict">Information and Communication Technology</option>
              <option value="englit">Literature in English</option>
              <option value="m1/m2">Mathematics M1/M2</option>
              <option value="musc">Music</option>
              <option value="pe">Physical Education</option>
              <option value="phy">Physics</option>
              <option value="sciCom">Science: Combined Science</option>
              <option value="sciInt">Science: Integrated Science</option>
              <option value="tech">Technology and Living</option>
              <option value="ths">Tourism and Hospitality Studies</option>
              <option value="va">Visual Arts</option>
              <option value="noEl2" selected={this.state.selected2}>N/A</option>
            </select>
            <select className="elBreak select4 form-control" name="el2Score" disabled={this.state.Elective2}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">5*</option>
              <option value="7">5**</option>
            </select>

            <select className="label6 form-control" id="el3" name="el3" disabled={this.state.Elective3}>
              <option value="bio">Biology</option>
              <option value="bafs">Business, Accounting and Financial Studies</option>
              <option value="chem">Chemistry</option>
              <option value="chist">Chinese History</option>
              <option value="chiLit">Chinese Literature</option>
              <option value="desi">Design and Applied Technology</option>
              <option value="econ">Economics</option>
              <option value="ers">Ethics and Religious Studies</option>
              <option value="geog">Geography</option>
              <option value="hmsc">Health Management and Social Care</option>
              <option value="hist">History</option>
              <option value="ict">Information and Communication Technology</option>
              <option value="englit">Literature in English</option>
              <option value="m1/m2">Mathematics M1/M2</option>
              <option value="musc">Music</option>
              <option value="pe">Physical Education</option>
              <option value="phy">Physics</option>
              <option value="sciCom">Science: Combined Science</option>
              <option value="sciInt">Science: Integrated Science</option>
              <option value="tech">Technology and Living</option>
              <option value="ths">Tourism and Hospitality Studies</option>
              <option value="va">Visual Arts</option>
              <option value="noEl3" selected={this.state.selected3}>N/A</option>
            </select>
            <select className="elBreak select6 form-control" name="el3Score" disabled={this.state.Elective2}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">5*</option>
              <option value="7">5**</option>
            </select>

            <button type="submit" className="btn btn-info submitButton" id="submitButton">Submit</button>
          </form>

        </div>
      </div>

    );
  }
}



function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ calScore: calScore }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);