import React, { Component } from "react";
import { connect } from "react-redux";
import { calScore } from '../actions/index'
import { bindActionCreators } from "redux";
import HomeCoreSelectOption from "../components/HomeCoreSelectOption";
import HomeElSelectOption from "../components/HomeElSelectOption";
import "./InputPage.scss"
import { link } from "../data/jsonLink";
import axios from "axios";
import {
  Link
} from 'react-router-dom'

//InputPage.

class InputPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidSubjectInput: false,
      type: "4C3X",
      Elective2: "",
      selected2: "",
      Elective3: "",
      selected3: "",
      myJson: ""
    }
  }


  // Send the inputted form to Action Creator
  handleFormSubmit = (event) => {
    const { chiScore, engScore, mathScore, lsScore, el1, el1Score, el2, el2Score, el3, el3Score } = event.target

    //Check if same subjects are selected
    if (this.state.type === "4C2X" && el1.value === el2.value) {
      this.setState({
        invalidSubjectInput: "Elective Should Not Be The Same!"
      })
    }
    else if (this.state.type === "4C3X" && (el1.value == el2.value || el2.value == el3.value || el1.value == el3.value)) {
      this.setState({
        invalidSubjectInput: "Elective Should Not Be The Same!"
      })
    }
    else {
      //Push the core and elective inputted subject and score to the array 
      var inputScore = [
        { subject: "Chinese", score: parseInt(chiScore.value, 10) },
        { subject: "English", score: parseInt(engScore.value, 10) },
        { subject: "Maths", score: parseInt(mathScore.value, 10) },
        { subject: "LS", score: parseInt(lsScore.value, 10) },
        { subject: el1.value, score: parseInt(el1Score.value, 10) }
      ]

      if (this.state.Elective2 !== true) {
        //Push the 2nd elective inputted subject and score to the array 
        inputScore.push({ subject: el2.value, score: parseInt(el2Score.value, 10) })
      }
      if (this.state.Elective3 !== true) {
        //Push the 3rd elective inputted subject and score to the array 
        inputScore.push({ subject: el3.value, score: parseInt(el3Score.value, 10) })
      }
      //Send the data
      this.props.calScore(inputScore)

      this.setState({invalidSubjectInput: false})
      // this.props.history.push("/HKDSE/result");
      this.props.history.push("/result");
      window.scrollTo(0, 0)
    }
    event.preventDefault();
    

  }

  componentDidMount() {
    const links = Object.values(link)
    fetch('https://api.github.com/repos/facebook/create-react-app/contributors')
      .then(res => res.json())
      .then(contributors => this.setState({ contributors }));
    links.map(link => {
      fetch(link)
        .then((response) => {
          return response.json()
        })
        .then((myJson) => {
          console.log(myJson);
          this.setState({ myJson })
        });
    })


  }

  //disable some select elements if certain button is clicked 
  radioOnclick = (e) => {
    switch (e) {
      case 1:
        this.setState({
          type: "4C1X",
          Elective2: true,
          Elective3: true,
        })
        break;
      case 2:
        this.setState({
          type: "4C2X",
          Elective2: "",
          Elective3: true,
        })
        break;
      case 3:
        this.setState({
          type: "4C3X",
          Elective2: "",
          Elective3: "",
        })
        break;
    }
  }

  render() {
    return (
      <div className="inputPageContainer">
        <div className="introContainer">
          <p>University Score Calculator</p>
          <p>Generate all possible University courses based on your HKDSE Score on One Click</p>
          <div className="imgContainer">
            <img src="https://i.imgur.com/kOeI9ZQ.jpg" alt="HKDSE Score Calculator" ></img>
          </div>
        </div>
        <h2 className="homeTitle">Start By Inputting Your DSE Score: </h2>
        <div className="inputContainer">

          <h4 className="errorTitle">{this.state.invalidSubjectInput}</h4>

          <form className="homeInnerContainer" onSubmit={this.handleFormSubmit.bind(this)}>

            <div id="homeRadio" className="btn-group btn-group-toggle" data-toggle="buttons" >
              <label className="btn btn-secondary " onClick={() => this.radioOnclick(1)}>
                <input type="radio" name="totalEl" id="4C1X" />4C1X
              </label>
              <label className=" btn btn-secondary" onClick={() => this.radioOnclick(2)}>
                <input type="radio" name="totalEl" id="4C2X" />4C2X
              </label>
              <label className=" btn btn-secondary active" onClick={() => this.radioOnclick(3)}>
                <input type="radio" name="totalEl" id="4C3X" />4C3X
              </label>
            </div>
            <br />
            <HomeCoreSelectOption label="label1" select="select1" id="chi" name="chiScore" subject="Chinese" />
            <HomeCoreSelectOption label="label3" select="select3" id="eng" name="engScore" subject="English" />
            <HomeCoreSelectOption label="label5" select="select5" id="math" name="mathScore" subject="Mathematics" />
            <HomeCoreSelectOption label="label7" select="select7" id="lsScore" name="lsScore" subject="Liberal Study" />

            <label className={`labelEL control-label`}>Electives:</label>
            <HomeElSelectOption label="label2" select="select2" id="el1" name="el1" nameScore="el1Score" />
            <HomeElSelectOption label="label4" select="select4" id="el2" name="el2" nameScore="el2Score" disabled={this.state.Elective2} defaultValue="Physics" />
            <HomeElSelectOption label="label6" select="select6" id="el3" name="el3" nameScore="el3Score" disabled={this.state.Elective3} defaultValue="Chemistry" />

            <button type="submit" className="btn btn-info submitButton" id="submitButton"> Submit</button>
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

export default connect(null, mapDispatchToProps)(InputPage);