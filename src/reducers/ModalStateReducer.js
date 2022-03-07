import { MODAL_STATE } from "../actions";

//for testing use only 
var initialState =  {}


export default function (state = initialState , action) {
  switch (action.type) {

    case MODAL_STATE: {
      let newState = action.payload
      return newState; 
    }
    
    default:
      return state;

  }
}