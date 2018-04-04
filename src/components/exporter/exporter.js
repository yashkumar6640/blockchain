import React from "react";
import "./exporter.css";
import BillOfLading from "./../billOfLading/billOfLading";
import PackingList from "./../packingList/packinglist";
import CertificateOfOrigin from "./../certificateofOrigin/certificateoforigin";
// import Insurance from "./../insurance/insurance"
export default class Exporter extends React.Component {
  render() {
    return (
      <div className="outer-layer-exporter">
        {/* <div className="title text-center"> Exporter's View </div>
    <div className="left-box">Order #</div>
    <div className="right-box">Customer</div>
    <div className="left-box-content">7gTniU56Mnk88nLo</div>
    <div className="right-box-content">Srijan Sao Co. </div>
    <div className="content-title text-center">Packing List</div>
    <div className="content">
    <div className="col-sm-3"> Signatures Required</div>
    <div className="col-sm-6">
    <div className="pdf-area"></div>
    <button className="button-zoom">Zoom</button>
    </div>
    <div className="col-sm-3"> */}

        {/* </div> */}

        {/* // </div> */}
        <BillOfLading              uuid={this.props.uuid}
          source={this.props.source}
          destination={this.props.destination}
            getCurrentDate={this.props.getCurrentDate}
            updateStep={this.props.updateStep}
            pageSubmit={this.props.pageSubmit}/>
        {/* <PackingList/> */}
        {/* <CertificateOfOrigin/> */}
      </div>
    );
  }
}
