import { CAL_SCORE } from "../actions";
import { DISPLAY_ERROR_MESSAGE } from "../actions"

var initialState =  [
  { subject: "Chinese", score: 5 },
  { subject: "English", score:6 },
  { subject: "Maths", score: 7 },
  { subject: "LS", score:7 },
  { subject: "phy", score:7 },
  { subject: "chem", score:7 },
  { subject: "bio", score:7 },
]



export default function (state = initialState, action) {

  switch (action.type) {
    case CAL_SCORE:
      let newState = [ ...initialState ]
      newState = action.payload
      return newState; // this becomes the state 

    case DISPLAY_ERROR_MESSAGE:
      console.log("ok in here")
      newState = action.payload

      return newState
    default:
      return state;

  }
}
