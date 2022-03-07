import React from "react";
const HomeCoreSelectOption = (props) => {


    const {label, select, id, name, subject} = props
    return (
        <React.Fragment>
            <label className={`${label} control-label`}>{subject}</label>
            <select className={`${select} form-control`} id={id} name={name} defaultValue="5">
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

export default HomeCoreSelectOption