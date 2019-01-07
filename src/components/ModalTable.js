import React from "react";
import './Modal.css';


const ModalTable = (props) => {
    const { modalContent, reason } = props;
    const minRequire = modalContent.MinLevelRequired.toString().split('');

    const formatReason = (a) => {
        const muliReason = a.split("//")
        return muliReason.map((e,i) => {
            return <p key={i}>{e}</p>
        })
    }
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

    const remarks = (e) => {
        if (e.Code.charAt(2) === "6" && modalContent.Weighting !== "") {
            return (
                <React.Fragment>
                    <p>Subjects that will be given heavier weightings ranges from 1.1 to 2: ($$ indicates heavier weightings than $)</p>
                </React.Fragment>
            )
        }
    }
    const eligible = () => {
        return (
            <table className="modalTable">
                <caption>Counting</caption>
                <thead >
                    <tr>
                        <th className="border">Not Eligible Reasons</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border">{formatReason(reason)}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <React.Fragment>
            {reason !== undefined && reason !== ""  ? eligible() : null}
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
                        <td className="border">
                            <span>{remarks(modalContent)}</span>
                            <p>{NAdefault(modalContent.Weighting)}</p>
                        </td>
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