import { VIEW_CHOSEN_SUBJECT } from "../actions";

var initialState = ["", "", "", "", "", "", ""]

export default function (state = initialState, action) {

    switch (action.type) {
        case VIEW_CHOSEN_SUBJECT:
            var chosenSubject = [ ...initialState ]
            var newState = action.payload
            var color = "#81c784";
            console.log(newState)
            newState.subject.map((el) => {
                switch (el) {
                    case newState.allScore[0].subject:
                        chosenSubject[0] = color
                        break;
                    case newState.allScore[1].subject:
                        chosenSubject[1] = color
                        break;
                    case newState.allScore[2].subject:
                        chosenSubject[2] = color
                        break;
                    case newState.allScore[3].subject:
                        chosenSubject[3] = color
                        break;
                    case newState.allScore[4].subject:
                        chosenSubject[4] = color
                        break;
                    case newState.allScore[5].subject:
                        chosenSubject[5] = color
                        break;
                    case newState.allScore[6].subject:
                        chosenSubject[6] = color
                        break;
                    default:
                        break;
                }
                
                
            })
            console.log(chosenSubject)
            return chosenSubject;
            break;
        default:
            return state; // this becomes the state 
    }
}
