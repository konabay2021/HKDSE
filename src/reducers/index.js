import { combineReducers } from "redux";
import InputDataReducer from "./InputDataReducer";
import CalScoreReducer from "./CalScoreReducer";
import hkuDataReducer from "./hkuDataReducer";
import cuhkDataReducer from "./cuhkDataReducer";
import hkustDataReducer from "./hkustDataReducer";
import ViewChosenSubjectReducer from "./ViewChosenSubjectReducer";

//combine the reducers together 
const rootReducer = combineReducers({
    callScore: CalScoreReducer,
    inputScore: InputDataReducer,
    hkuData: hkuDataReducer,
    cuhkData: cuhkDataReducer,
    hkustData: hkustDataReducer,
    viewChosenSubject : ViewChosenSubjectReducer
    
});

export default rootReducer;