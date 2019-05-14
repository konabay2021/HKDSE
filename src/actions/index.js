export const CAL_SCORE = "CAL_SCORE";
export const VIEW_CHOSEN_SUBJECT = "VIEW_CHOSEN_SUBJECT";
export const DISPLAY_ERROR_MESSAGE = "DISPLAY_ERROR_MESSAGE";
export const UNI_DATA = "UNI_DATA";
export const MODAL_STATE = "MODAL_STATE";

// pass the const payload to CalScoreReducer.js Reducer
export function calScore(inputScore) {
    const payload = [...inputScore]
    return {
        type: CAL_SCORE,
        payload: payload
    };
}

// pass the const payload to ViewChosenSubjectReducer.js Reducer
export function viewChosenSubject(subject, allScore) {
    const payload = {
        subject: subject,
        allScore: allScore
    }

    return {
        type: VIEW_CHOSEN_SUBJECT,
        payload: payload
    };
}

export function dataReducer(data) {
    const payload = {...data}
    return {
        type: UNI_DATA,
        payload: payload
    };
}

export function modalState(state) {
    const payload = {
        state: state
    }
    return {
        type: MODAL_STATE,
        payload: payload
    };
}