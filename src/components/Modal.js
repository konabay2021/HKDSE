import React, { Component } from "react";
import onClickOutside from 'react-onclickoutside';

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClickOutside = () => {
        this.props.closeModal()
    }
    render() {
        return (
         
                <div className="modal-content" style={{ display: this.props.modalDisplay }}>
                    <button className="close" onClick={this.props.closeModal}>&times;</button>
                    <p>Some text in the Modal..</p>
                    <h4>{this.props.MethodDetails}</h4>
                </div>

        )
    }
}

export default onClickOutside(Modal);