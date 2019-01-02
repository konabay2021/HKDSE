import React from "react";
import './Modal.css';


const ModalTable = (props) => {

    const NAdefault = (comp) => {
        switch (comp) {
            case "":
                return "N/A"
            case "N":
                return "Does Not Count"
            case "Y":
                return "Count"
            default:
                return comp
        }
    }

    const modalContent = props.modalContent;
    const minRequire = modalContent.MinLevelRequired.toString().split('');
    return (
        <React.Fragment>
            <div className="modalWidthTableWrapper">
                <table className="modalTable ">

                    <caption>Minimum Level Required</caption>
                    <thead >
                        <tr>
                            <th className="border">Chinese Language</th>
                            <th className="border">English Language</th>
                            <th className="border">Mathematics</th>
                            <th className="border">Liberal Studies	</th>
                            <th className="border">Elective Subjects</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="border">{minRequire[0]}</td>
                            <td className="border">{minRequire[1]}</td>
                            <td className="border">{minRequire[2]}</td>
                            <td className="border">{minRequire[3]}</td>
                            <td className="border">{minRequire[4]}{minRequire[5]}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <table className="modalTable">
                <caption>Counting</caption>
                <thead >
                    <tr>
                        <th className="border">M1/M2</th>
                        <th className="border">Category C: Other Language Subjects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border">{NAdefault(modalContent.M1M2)}</td>
                        <td className="border">{NAdefault(modalContent.CategroyC_Subjects)}</td>
                    </tr>
                </tbody>
            </table>
            <table className="modalTable">
                <caption>Specific Subject Requirenment</caption>
                <thead >
                    <tr>
                        <th className="border">Subject Requirenment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border">{NAdefault(modalContent.SubjectRequirenment)}</td>
                    </tr>
                </tbody>
            </table>
            <table className="modalTable">
                <caption>Subject Weighting</caption>
                <thead >
                    <tr>
                        <th className="border">Subject Weighting</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border">{NAdefault(modalContent.Weighting)}</td>
                    </tr>
                </tbody>
            </table>
            <table className="modalTable">
                <caption>Remarks</caption>
                <thead >
                    <tr>
                        <th className="border">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border">{NAdefault(modalContent.Remarks)}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>

    )
}
export default ModalTable;