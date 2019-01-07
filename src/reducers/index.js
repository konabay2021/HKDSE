import { combineReducers } from "redux";
import CalScoreReducer from "./CalScoreReducer";

import ViewChosenSubjectReducer from "./ViewChosenSubjectReducer";
import UniDataReducer from "./UniDataReducer";

//combine the reducers together 
const rootReducer = combineReducers({
    callScore: CalScoreReducer,
    viewChosenSubject: ViewChosenSubjectReducer,
    uniData: UniDataReducer
    
});

export default rootReducer;