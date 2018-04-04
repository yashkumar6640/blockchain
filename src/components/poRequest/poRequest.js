import React from "react";
import ImporterBank from "./../importer_bank/importerBank.js";
import "./poRequest.css";
var $ = require("jquery");

export default class PORequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      step: 1,
      status: "",
      organizationDetails: "",
      sensorType: "",
      noOfSensor: "",
      costOfSensor: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    console.log("Inside PO request", this.props.getCurrentDate());
  }
  handleSubmit() {
    this.props.updateStep(2);
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
      ',"organizationdetails":' +
      '"' +
      this.state.organizationDetails +
      '"' +
      ',"sensortype":' +
      '"' +
      this.state.sensorType +
      '"' +
      ',"noofsensor":' +
      '"' +
      this.state.noOfSensor +
      '"' +
      ',"costofsensor":' +
      '"' +
      this.state.costOfSensor +
      '"' +
      "}";
    console.log(str);
    //ajax call goes here if any
    var data = {
      peers: ["localhost:7051"],
      fcn: "invoke",
      args: [
        "POREQUEST",
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
    // $.ajax({
    //   method: "post",
    //   dataType: "json",
    //   data: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjI4NTQzNzcsInVzZXJuYW1lIjoiSmltMSIsIm9yZ05hbWUiOiJ0cmFkZS1vcmciLCJpYXQiOjE1MjI4MTgzNzd9.aDiVNNM4n0UeUp-pEAEnsYHVO7WIKFXxybJqqwD6PBg"
    //   },

    //   url:
    //     "http://ustr-erl2-2358.na.uis.unisys.com:4000/channels/tradechannel/chaincodes/uni-trade-finance",
    //   async: true,
    //   success: function(resp) {
    //     console.log(resp);
    //   }
    // });
    this.setState({
      formSubmitted: true
    });
  }
  handleClick() {
    this.props.updateTimeline(50);
  }
  render() {
    switch (this.state.formSubmitted) {
      case false:
        return (
          <div className="container-form-layout">
            <div className="outer-layer">
              <div className="form">
                <form>
                  <div>
                    <span className="para-wrap">
                      <p className="para">UUID :</p>
                    </span>
                    <div>
                      <input type="text" name="name" placeholder="UUID" />
                    </div>
                  </div>
                  <div>
                    <span className="para-wrap">
                      <p className="para">STEPS :</p>
                    </span>
                    <div>
                      <input type="text" name="name" placeholder="STEPS" />
                    </div>
                  </div>
                  <div>
                    <span className="para-wrap">
                      <p className="para">STATUS :</p>
                    </span>
                    <div>
                      <input type="text" name="name" placeholder="STATUS" />
                    </div>
                  </div>
                  <div>
                    <span className="para-wrap">
                      <p className="para">DATE FIELD :</p>
                    </span>
                    <div>
                      <input type="text" name="name" placeholder="DATE FIELD" />
                    </div>
                  </div>
                  <div>
                    <span className="para-wrap">
                      <p className="para">ORGANISATIONAL DETAILS :</p>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="ORGANISATIONAL DETAILS"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="para-wrap">
                      <p className="para">SENSOR TYPES :</p>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="SENSOR TYPES"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="para-wrap">
                      <p className="para">NUMBER OF SENSORS :</p>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="NUMBER OF SENSORS"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="para-wrap">
                      <p className="para">COST OF SENSORS :</p>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="COST OF SENSORS"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      className="submit-button"
                      type="submit"
                      value="Submit"
                      onClick={this.handleSubmit}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        );

      case true:
        return (
          <ImporterBank
            getCurrentDate={this.props.getCurrentDate}
            updateStep={this.props.updateStep}
          />
        );
    }
  }
}
