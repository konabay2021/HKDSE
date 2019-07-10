import React from "react";
import onClickOutside from 'react-onclickoutside';
import ModalTable from "./ModalTable";
import ModalChart from "./ModalChart";
import './Modal.scss';


class Modal extends React.Component {

    handleClickOutside = () => {
        this.props.closeModal()

    }
    yearConvertor = (e) => {
        let arr = []
        switch (e.length) {
            case 7:
                arr.push("2012")
            case 6:
                arr.push("2013")
            case 5:
                arr.push("2014")
            case 4:
                arr.push("2015")
            case 3:
                arr.push("2016")
            case 2:
                arr.push("2017")
            case 1:
                arr.push("2018")
            default:
                break;
        }
        return arr
    }

    render() {
        const { modalContent, reason } = this.props;
        const yaxis = [{
            min: 0,
            title: {
                text: "Number of people"
            },
        }]
        const chart1Options = {
            chart: {
                id: 'Chart1',
            },
            yaxis: yaxis,
            xaxis: {
                categories: this.yearConvertor(modalContent.intake)
            }
        }
        const chart1Series = [{
            name: 'Intake(Band A)',
            data: modalContent.intake
        },
        {
            name: 'Intake(Out Of Band A)',
            data: modalContent.OutBandAIntake
        }]
        const chart2Options = {
            chart: {
                id: 'Chart2',
            },
            yaxis: yaxis,
            xaxis: {
                categories: this.yearConvertor(modalContent.intake)
            }
        }
        const chart2Series = [{
            name: 'Application Statistics(Total)',
            data: modalContent.ApplyAmount
        },
        {
            name: 'Application Statistics(Band A)',
            data: modalContent.BandAApplyAmount
        }]


        return (
            <div className="modal-content" style={{ display: this.props.modalDisplay }}>
                <button className="close" onClick={this.props.closeModal}>&times;</button>
                <h2>{modalContent.Code} {modalContent.Course}</h2>
                <h6>Admissions Information</h6>
                <ModalTable modalContent={modalContent} reason={reason} />
                <ModalChart title="Offer Statistics (as at the Announcement of the Main Round Offer Results)"
                    options={chart1Options} series={chart1Series} />
                <ModalChart title="Application Statistics (after Modification of Programme Choices)"
                    options={chart2Options} series={chart2Series} />

            </div>

        )
    }
}

export default onClickOutside(Modal);