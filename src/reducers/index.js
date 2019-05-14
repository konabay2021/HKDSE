import { combineReducers } from "redux";
import InputDataReducer from "./InputDataReducer";
import CalScoreReducer from "./CalScoreReducer";
import ViewChosenSubjectReducer from "./ViewChosenSubjectReducer";
import UniDataReducer from "./UniDataReducer";
import ModalStateReducer from "./ModalStateReducer"

//combine the reducers together 
const rootReducer = combineReducers({
    callScore: CalScoreReducer,
    inputScore: InputDataReducer,
    viewChosenSubject: ViewChosenSubjectReducer,
    uniData: UniDataReducer,
    modalState: ModalStateReducer
    
});

export default rootReducer;