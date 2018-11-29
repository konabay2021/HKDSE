import { CAL_SCORE } from "../actions";
import { DISPLAY_ERROR_MESSAGE } from "../actions"

//for testing use only 
var initialState =  [
  { subject: "Chinese", score: 5 },
  { subject: "English", score:6 },
  { subject: "Maths", score: 7 },
  { subject: "LS", score:7 },
  { subject: "phy", score:7 },
  { subject: "chem", score:7 },
  { subject: "bio", score:7 },
]


// A reducer to return the user's inputted subject and electives as props to containers 
export default function (state = initialState, action) {

  switch (action.type) {
    case CAL_SCORE: //when the user clicked the submit button to submit his/her inputted score and electives 
      let newState = [ ...initialState ]
      newState = action.payload
      return newState; 

    case DISPLAY_ERROR_MESSAGE: //when error occur // still under testing 
      newState = action.payload

      return newState
    default:
      return state;

  }
}
