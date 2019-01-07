import Chart from 'react-apexcharts'
import React from "react";

class ModalChart extends React.Component {
    render() {

        return (
            <div className="modalTable chart">
                <h6>{this.props.title}</h6>
                {this.props.options.xaxis.categories.length === 0 ? 
                <p>***No past Record for reference as this is a 2019 new course***</p> : 
                <Chart options={this.props.options} series={this.props.series} type="line" height="300" />}

            </div>
        )
    }
}

export default ModalChart