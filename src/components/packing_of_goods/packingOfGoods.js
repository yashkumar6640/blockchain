import React from "react";
import "./packing.css";

import CustomsUSA from "./../customs/customsUSA.js";
// import BillOfExchange from './../bill_of_exchange/'
import Exporter from "./../exporter/exporter.js";
var $ = require("jquery");

export default class GoodsPacking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      step: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pageSubmit = this.pageSubmit.bind(this);
    this.updateStep = this.updateStep.bind(this);
  }

  componentWillMount() {
    console.log("Inside GP request", this.props.getCurrentDate());
  }

  updateStep(value) {
    this.setState({
      step: value
    });
  }

  pageSubmit() {
    alert("here");
    this.setState({
      formSubmitted: true
    });
  }

  handleSubmit() {
    this.props.updateStep(4);

    this.setState({
      formSubmitted: true
    });
  }
  render() {
    switch (this.state.formSubmitted) {
      case false:
        return (
          <div className="container-packing">
            <div className="col-sm-4">
              <div className="col-sm-12 list-box">
                <div className="header"> </div>
                <div className="btn btn-block btn-default listButton">
                  BILL OF LADING{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  PACKING LIST{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  CERTIFICATE OF ORIGIN{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  INSURANCE{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  TAX AND CUSTOM DETAILS{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  INVOICE{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  TRANSPORT DOCUMENTS{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  BILL OF EXCHANGE{" "}
                </div>
                <div className="footer"> </div>
              </div>
            </div>
            <div className="col-sm-8 boxExport">
              {/* <Exporter
                uuid={this.props.uuid}
                source={this.props.source}
                destination={this.props.destination}
                getCurrentDate={this.props.getCurrentDate}
                updateStep={this.props.updateStep}
                pageSubmit={this.pageSubmit}
              /> */}
              <div className={this.state.step === 1 ? "" : "hide"}>
                <BillOfLading updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 2 ? "" : "hide"}>
                <PackingList updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 3 ? "" : "hide"}>
                <CertificateOfOrigin updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 4 ? "" : "hide"}>
                <Insurance updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 5 ? "" : "hide"}>
                <TaxAndCustom updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 6 ? "" : "hide"}>
                <Invoice updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 7 ? "" : "hide"}>
                <TransportDocument updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 8 ? "" : "hide"}>
                <BillOfExchange pageSubmit={this.pageSubmit} />
              </div>
              {/* // {this.state.step === 1} ?{" "} */}
              {/* // <BillOfLading incrementStep={this.incrementStep} /> : '' */}
              {/* // {this.state.step === 2} ?{" "} */}
              {/* // <PackingList */}

              {/* //   incrementStep={this.incrementStep}
              //   pageSubmit={this.pageSubmit}
              // />: ''
              // {this.state.step === 3} ?{" "}
              // <CertificateOfOrigin incrementStep={this.incrementStep} />: ''
              // {this.state.step === 4} ?{" "}
              // <Insurance incrementStep={this.incrementStep} />
              // {this.state.step === 5} ?{" "}
              // <TaxAndCustom incrementStep={this.incrementStep} />
              // {this.state.step === 6} ?{" "}
              // <Invoice incrementStep={this.incrementStep} />
              // {this.state.step === 7} ?{" "}
              // <TransportDocument incrementStep={this.incrementStep} />
              // {this.state.step === 8} ?{" "}
              // <BillOfExchange incrementStep={this.incrementStep} /> */}
            </div>
          </div>
        );

      case true:
        return (
          <CustomsUSA
            uuid={this.props.uuid}
            source={this.props.source}
            destination={this.props.destination}
            getCurrentDate={this.props.getCurrentDate}
            updateStep={this.props.updateStep}
          />
        );
    }
  }
}

export class BillOfLading extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateStep(2);
  }
  render() {
    return (
      <div>
        inside Bill of lading
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}
export class PackingList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateStep(3);
  }
  render() {
    return (
      <div>
        inside Packing List
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export class CertificateOfOrigin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateStep(4);
  }
  render() {
    return (
      <div>
        inside CertificateOfOrigin
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export class Insurance extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateStep(5);
  }

  render() {
    return (
      <div>
        inside Insurance
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export class TaxAndCustom extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateStep(6);
  }
  render() {
    return (
      <div>
        inside TaxAndCustom
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateStep(7);
  }
  render() {
    return (
      <div>
        inside Invoice
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export class TransportDocument extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateStep(8);
  }
  render() {
    return (
      <div>
        inside TransportDocument
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}
export class BillOfExchange extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.pageSubmit();
  }
  render() {
    return (
      <div>
        inside BillOfExchange
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}
