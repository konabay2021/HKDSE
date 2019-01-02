import React from "react";
const HomeElSelectOption = (props) => {

    const { label, select, id, name, nameScore, disabled, defaultValue} = props
    return (
        <React.Fragment>
           
            <select className={`${label} form-control `} data-dropup-auto="false" data-live-search="true" id={id} name={name} disabled={disabled} defaultValue={defaultValue}>
                <option value="Biology">Biology</option>
                <option value="Business, Accounting and Financial Studies">Business, Accounting and Financial Studies</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Chinese History">Chinese History</option>
                <option value="Chinese Literature">Chinese Literature</option>
                <option value="Design and Applied Technology">Design and Applied Technology</option>
                <option value="Economics">Economics</option>
                <option value="Ethics and Religious Studies">Ethics and Religious Studies</option>
                <option value="Geography">Geography</option>
                <option value="Health Management and Social Care">Health Management and Social Care</option>
                <option value="History">History</option>
                <option value="Information and Communication Technology">Information and Communication Technology</option>
                <option value="Literature in English">Literature in English</option>
                <option value="Mathematics M1/M2">Mathematics M1/M2</option>
                <option value="Music">Music</option>
                <option value="Physical Education">Physical Education</option>
                <option value="Physics" >Physics</option>
                <option value="Science: Combined Science">Science: Combined Science</option>
                <option value="Science: Integrated Science">Science: Integrated Science</option>
                <option value="Technology and Living">Technology and Living</option>
                <option value="Tourism and Hospitality Studies">Tourism and Hospitality Studies</option>
                <option value="Visual Arts">Visual Arts</option>
            </select>
            <select className={`elBreak ${select} form-control`} name={nameScore} disabled={disabled} defaultValue="5">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">5*</option>
                <option value="7">5**</option>
            </select>
        </React.Fragment>
    )

}

export default HomeElSelectOption

