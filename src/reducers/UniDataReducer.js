import { UNI_DATA } from "../actions";

//for testing use only 
var initialState =  {}


export default function (state = initialState , action) {
  switch (action.type) {

    case UNI_DATA: 
      let uniData = { ...initialState }
      uniData = action.payload
      return uniData; 

    default:
      return state;

  }
}