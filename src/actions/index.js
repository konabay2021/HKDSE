export const CAL_SCORE = "CAL_SCORE";
export const VIEW_CHOSEN_SUBJECT = "VIEW_CHOSEN_SUBJECT";
export const DISPLAY_ERROR_MESSAGE = "DISPLAY_ERROR_MESSAGE"

export function calScore(inputScore) {
    const payload = [...inputScore]
    return {
        type: CAL_SCORE,
        payload: payload
    };
}

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