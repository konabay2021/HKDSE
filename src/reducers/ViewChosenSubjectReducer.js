import { VIEW_CHOSEN_SUBJECT } from "../actions";

var initialState = ["", "", "", "", "", "", ""]

// A reducer to return the selected subjects which are used to calculate the weighted score as props to containers
export default function (state = initialState, action) {

    switch (action.type) {
        case VIEW_CHOSEN_SUBJECT:
            var chosenSubject = [ ...initialState ]
            var newState = action.payload
            var color = "#81c784";
            // map the user's inputted subject with the selected subjects which are used to calculate the weighted score 
            newState.subject.map((el) => {
                newState.allScore.map((all, j) => {
                    if(el === all.subject)
                    chosenSubject[j] = color
                    // return all
                } )   
                // return el 
            })
            return chosenSubject;
        default:
            return state; // this becomes the state 
    }
}
