import React, { Component } from "react";
import Routes from "./route.js";

import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Exporter from "./components/exporter/exporter.js";
import Timeline from "./components/timeline/timeline.js";
import Export from "./components/topdf/topdf.js";
import App from "./App.js";
import "./app1.css";

var $ = require("jquery");

class AppLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: "",
      source: "",
      destination: "",
      logInSuccessful: false,
      records: [{}]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var value = e.target.value;
    switch (e.target.name) {
      case "uuid": {
        this.setState({
          uuid: value
        });
        break;
      }
      case "source": {
        this.setState({
          source: value
        });
        break;
      }
      case "destination": {
        this.setState({
          destination: value
        });
        break;
      }
      default: {
        alert("in default");
      }
    }
  }

  getCurrentDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDay() + 1;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    var dateTime =
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    return dateTime;
  }
  handleSubmit() {
    // var date = new Date();
    // var year = date.getFullYear();
    // var month = date.getMonth() + 1;
    // var day = date.getDay() + 1;
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    // var seconds = date.getSeconds();

    // if (month < 10) {
    //   month = "0" + month;
    // }
    // if (day < 10) {
    //   day = "0" + day;
    // }
    // var dateTime =
    //   year +
    //   "-" +
    //   month +
    //   "-" +
    //   day +
    //   " " +
    //   hours +
    //   ":" +
    //   minutes +
    //   ":" +
    //   seconds;
    var dateTime = this.getCurrentDate();
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
      this.state.uuid +
      '"' +
      ',"source":' +
      '"' +
      this.state.source +
      '"' +
      ',"destination":' +
      '"' +
      this.state.destination +
      '"' +
      "}";
    console.log(str);
    //ajax call goes here if any
    var data = {
      peers: ["localhost:7051"],
      fcn: "invoke",
      args: [
        "FINANCEINIT",
        // JSON.stringify(str)
        str
        // '{"eventTime":"2017-03-25T17:10:16Z","uuid":"uuid-t2","source":"TX, USA","destination":"MUM,IND"}'
      ]
    };
    $.ajax({
      method: "post",
      dataType: "json",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjI4NTQzNzcsInVzZXJuYW1lIjoiSmltMSIsIm9yZ05hbWUiOiJ0cmFkZS1vcmciLCJpYXQiOjE1MjI4MTgzNzd9.aDiVNNM4n0UeUp-pEAEnsYHVO7WIKFXxybJqqwD6PBg"
      },

      url:
        "http://ustr-erl2-2358.na.uis.unisys.com:4000/channels/tradechannel/chaincodes/uni-trade-finance",
      async: true,
      success: function(resp) {
        console.log(resp);
      }
    });

    //permanent Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkppbTEiLCJvcmdOYW1lIjoidHJhZGUtb3JnIiwiaWF0IjoxNTIyODI2Nzk2fQ.SRJfxnbTU10TXiFzBj1r7sfmHCPRHDPUtV4pTeBXE_Q
    // var that = this;
    // var settings = {
    //   async: true,
    //   crossDomain: true,
    //   url:
    //     // "http://ustr-erl2-2357.na.uis.unisys.com:4000/channels/fedchannel/chaincodes/uni-fed/?peer=peer1&args=[%22query%22,%22{\\%22selector\\%22:{\\%22docType\\%22:\\%22hlFederalEvent\\%22}}%22]&chaincodeVersion=v0&fcn=query",
    // "http://ustr-erl2-2358.na.uis.unisys.com:4000/channels/tradechannel/chaincodes/uni-trade-finance/?peer=peer1&args=[%22Query%22,%22{\\%22selector\\%22:{\\%22docType\\%22:\\%22FINANCEINIT\\%22}}%22]&chaincodeVersion=v0&fcn=Query",
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjI3ODYzODksInVzZXJuYW1lIjoiSmltMSIsIm9yZ05hbWUiOiJ0cmFkZS1vcmciLCJpYXQiOjE1MjI3NTAzODl9.UJjfg2gYytFoeXTQaNsjDMohE5hOQWhqsT_vd67V8NM",
    //     // "x-access-token": localStorage.getItem("token")
    //   }
    // };

    // $.ajax(settings).done(function(response) {
    //   that.setState({
    //     records: response
    //   });
    // });
    this.setState({
      logInSuccessful: true
    });
  }

  render() {
    switch (this.state.logInSuccessful) {
      case false:
        return (
          <div className="loginpage">
            <div className="text-center heading">
              Simplifying Trade Finance Dashboard
            </div>
            <div className="loginform">
              <form
                name="login-form"
                action="javascript:;"
                onSubmit={this.handleSubmit}
              >
                <div className="form-group">
                  <div>
                    <label>
                      UUID <span>*</span>
                    </label>
                  </div>
                  <div className="loginInput">
                    <input
                      type="text"
                      name="uuid"
                      placeholder="Enter UUID"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label>
                      Source <span>*</span>
                    </label>
                  </div>
                  <div className="loginInput">
                    <input
                      type="text"
                      name="source"
                      placeholder="Enter Source"
                      onChange={this.handleChange}
                      required
                    />{" "}
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label>
                      Destination <span>*</span>
                    </label>
                  </div>
                  <div className="loginInput">
                    <input
                      type="text"
                      name="destination"
                      placeholder="Enter Destination"
                      onChange={this.handleChange}
                      required
                    />{" "}
                  </div>
                </div>
                <div>
                  <button
                    name="loginSubmitButton"
                    className="btn btn-primary btn-block"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {console.log(
              this.state.uuid,
              this.state.source,
              this.state.destination
            )}
          </div>
        );

      case true:
        return (
          <App
            uuid={this.state.uuid}
            source={this.state.source}
            destination={this.state.destination}
            records={this.state.records}
            getCurrentDate={this.getCurrentDate}
          />
        );
    }
  }
}

export default AppLogin;
