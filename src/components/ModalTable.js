import React from "react";

const ModalTable = (props) => {
        const modalContent = props.modalContent ;
        const minRequire = modalContent.MinLevelRequired.toString().split('');
        return (
            <div>
                    <table className="modalTable">
                    <caption>Minimum Level Required</caption>
                        <thead >
                            <tr>
                                <th className="border">Chinese Language</th>
                                <th className="border">English Language</th>
                                <th className="border">Mathematics</th>
                                <th className="border">Liberal Studies	</th>
                                <th className="border">Two Elective Subjects</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border">{minRequire[0]}</td>
                                <td className="border">{minRequire[1]}</td>
                                <td className="border">{minRequire[2]}</td>
                                <td className="border">{minRequire[3]}</td>
                                <td className="border"> {minRequire[4]}</td>
                            </tr>
                        </tbody>
                    </table>
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
                                <td className="border">{modalContent.M1M2}</td>
                                <td className="border">{modalContent.CategroyC_Subjects}</td>
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
                                <td className="border">{modalContent.SubjectRequirenment}</td>
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
                                <td className="border">{modalContent.Weighting}</td>
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
                                <td className="border">{modalContent.Remarks}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
        )
}
export default ModalTable;