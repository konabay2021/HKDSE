import React, { Component } from "react";
import onClickOutside from 'react-onclickoutside';
import ModalTable from "./ModalTable"
import { Sparklines, SparklinesLine } from 'react-sparklines';
class Modal extends React.Component {
    constructor(props) {
        super(props)
        
    }
    handleClickOutside = () => {
        this.props.closeModal()
    }

    render() {


        const modalContent = this.props.modalContent ;
        return (

            <div className="modal-content" style={{ display: this.props.modalDisplay }}>
                <button className="close" onClick={this.props.closeModal}>&times;</button>
                <h2>{modalContent.Code} {modalContent.Course}</h2>
                <h6>Admissions Information</h6>
                <ModalTable 
                modalContent={modalContent}
                />
                    <Sparklines data={[5, 10, 5, 20]}>
  <SparklinesLine color="blue" />
</Sparklines>
            </div>

        )
    }
}

export default onClickOutside(Modal);