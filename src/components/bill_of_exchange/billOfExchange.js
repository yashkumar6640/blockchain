import React from "react";
import CustomsIndia from "./../customs/customsIndia.js";
var $ = require("jquery");

export default class BillOfExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      recievedFrom: "",
      importerDetails: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.updateStep(6);
    var dateTime = this.props.getCurrentDate();
    console.log(dateTime);
    var str = new String();

    // str =
    //   '{"eventTime":' +
    //   '"' +
    //   dateTime +
    //   '"' +
    //   ',"uuid":"uuid-t2","source":"TX, USA","destination":"MUM,IND"}';
    str =
      '{"eventTime":' +
      '"' +
      dateTime +
      '"' +
      ',"uuid":' +
      '"' +
      this.props.uuid +
      '"' +
      ',"step":' +
      '"' +
      this.state.step +
      '"' +
      ',"status":' +
      '"' +
      this.state.status +
      '"' +
      ',"receivedfrom":' +
      '"' +
      this.state.recievedFrom +
      '"' +
      ',"importerdetails":' +
      '"' +
      this.state.importerDetails +
      '"' +
      "}";
    console.log(str);
    //ajax call goes here if any
    var data = {
      peers: ["localhost:7051"],
      fcn: "invoke",
      args: [
        "EXPORTERBANKBOE",
        // JSON.stringify(str)
        str
        // '{"eventTime":"2017-03-25T17:10:16Z","uuid":"uuid-t2","source":"TX, USA","destination":"MUM,IND"}'
      ]
    };
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://ustr-erl2-2358.na.uis.unisys.com:4000/channels/tradechannel/chaincodes/uni-trade-finance",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkppbTEiLCJvcmdOYW1lIjoidHJhZGUtb3JnIiwiaWF0IjoxNTIyODI2Nzk2fQ.SRJfxnbTU10TXiFzBj1r7sfmHCPRHDPUtV4pTeBXE_Q"
      },
      processData: false,
      data: JSON.stringify(data)
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
    });
    this.setState({
      formSubmitted: true
    });
  }
  render() {
    switch (this.state.formSubmitted) {
      case false:
        return (
          <div>
            <div>inside Bill of exchange</div>
            <div
              className="btn btn-primary btn-block"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </div>
          </div>
        );

      case true:
        return (
          <CustomsIndia
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
