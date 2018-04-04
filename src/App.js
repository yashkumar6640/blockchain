import React, { Component } from "react";
import Routes from "./route.js";

import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AppLogin from "./App.1.js";
import Exporter from "./components/exporter/exporter.js";
import Timeline from "./components/timeline/timeline.js";
import Export from "./components/topdf/topdf.js";
import PORequest from "./components/poRequest/poRequest.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
      records: [{}],
      showFrontPage: true,
      showTimeline: false
    };
    this.updateTimeline = this.updateTimeline.bind(this);
    this.updateStep = this.updateStep.bind(this);
  }

  updateStep(value) {
    this.setState({
      step: value
    });
  }
  updateTimeline(value) {
    this.setState({
      count: value
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ records: nextProps.records });
  }
  componentWillMount() {
    console.log(this.props.getCurrentDate());
  }

  render() {
    return (
      // <div>
      //   <div className="col-sm-12 frontpage-navigator">
      //     <div className="text-center text-default">
      //       <h5> Blockchain for Trade Logistics </h5>
      //       <button
      //         type="button"
      //         className="btn btn-info btn-lg uuid-button"
      //         data-toggle="modal"
      //         data-target="#myModal"
      //       >
      //         UUID: {this.props.uuid}
      //       </button>
      //     </div>
      //     <hr />
      //     {/* <span>{this.props.source}</span> */}
      //     <div className="centerSVG">
      //       <Link to="/porequest">
      //         <span>PO Request</span>
      //       </Link>
      //       <span
      //         className={this.state.step >= 1 ? "fa fa-check" : "fa fa-bank "}
      //       />
      //       <Link to="/shipment">
      //         <span>PO Request</span>
      //       </Link>
      //       <span
      //         className={
      //           this.state.step >= 2
      //             ? "fa fa-bank faComplete"
      //             : "fa fa-bank marg"
      //         }
      //       />
      //       <span>PO Request</span>
      //       <span
      //         className={
      //           this.state.step >= 3
      //             ? "fa fa-bank faComplete"
      //             : "fa fa-bank marg"
      //         }
      //       />
      //       <span>PO Request</span>
      //       <span
      //         className={
      //           this.state.step >= 4
      //             ? "fa fa-bank faComplete"
      //             : "fa fa-bank marg"
      //         }
      //       />
      //       <span>PO Request</span>
      //       <span
      //         className={
      //           this.state.step >= 5
      //             ? "fa fa-bank faComplete"
      //             : "fa fa-bank marg"
      //         }
      //       />{" "}
      //       <span>PO Request</span>
      //       <span className="fa fa-ship" />
      //       <span>PO Request</span>
      //       <span
      //         className={
      //           this.state.step >= 6
      //             ? "fa fa-bank faComplete"
      //             : "fa fa-bank marg"
      //         }
      //       />{" "}
      //       <span>PO Request</span>
      //       <span
      //         className={
      //           this.state.step >= 7
      //             ? "fa fa-bank faComplete"
      //             : "fa fa-bank marg"
      //         }
      //       />
      //       <span>PO Request</span>
      //       <span
      //         className={
      //           this.state.step >= 8
      //             ? "fa fa-bank faComplete"
      //             : "fa fa-bank marg"
      //         }
      //       />
      //       <span>PO Request</span>
      //       <span
      //         className={
      //           this.state.step >= 9
      //             ? "fa fa-bank faComplete"
      //             : "fa fa-bank marg"
      //         }
      //       />
      //     </div>
      //     {/* <button
      //       type="button"
      //       className="btn btn-info btn-lg"
      //       data-toggle="modal"
      //       data-target="#myModal"
      //     >
      //       Open Modal
      //     </button> */}
      //     <div id="myModal" className="modal fade" role="dialog">
      //       <div className="modal-dialog">
      //         <div className="modal-content">
      //           <div className="modal-header">
      //             <button type="button" className="close" data-dismiss="modal">
      //               &times;
      //             </button>
      //             <h4 className="modal-title">UUID: {this.props.uuid}</h4>
      //           </div>
      //           <div className="modal-body">
      //             <table className="table table-striped table-hover table-responsive">
      //               <tbody>
      //                 {this.state.records.map(record => (
      //                   <tr>
      //                     <td>{record.docType}</td>
      //                     <td>{record.eventTime}</td>
      //                     <td>
      //                       <button
      //                         className="btn btn-primary"
      //                         data-toggle="modal"
      //                         data-target="#eventModal"
      //                       >
      //                         More
      //                       </button>
      //                     </td>
      //                   </tr>
      //                 ))}
      //                 <tr />
      //               </tbody>
      //             </table>
      //           </div>
      //           <div className="modal-footer">
      //             <button
      //               type="button"
      //               className="btn btn-default"
      //               data-dismiss="modal"
      //             >
      //               Close
      //             </button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <div id="eventModal" className="modal fade" role="dialog">
      //       <div className="modal-dialog">
      //         <div className="modal-content">
      //           <div className="modal-header">
      //             <button type="button" className="close" data-dismiss="modal">
      //               &times;
      //             </button>
      //             <h4 className="modal-title">UUID: {this.props.uuid}</h4>
      //           </div>
      //           <div className="modal-body">
      //             <pre>{JSON.stringify(this.state.records, undefined, 2)}</pre>
      //           </div>
      //           <div className="modal-footer">
      //             <button
      //               type="button"
      //               className="btn btn-default"
      //               data-dismiss="modal"
      //             >
      //               Close
      //             </button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     {/* <span>{this.props.destination}</span> */}
      //   </div>
      //   {/* <Switch>
      //     <Route
      //       path="/porequest"
      //       render={(updateTimeline, updateStep) => (
      //         <PORequest
      //           uuid={this.props.uuid}
      //           source={this.props.source}
      //           destination={this.props.destination}
      //           updateTimeline={this.updateTimeline}
      //           updateStep={this.updateStep}
      //           getCurrentDate={this.props.getCurrentDate}
      //         />
      //       )}
      //     />
      //   </Switch> */}
      //   <PORequest
      //           uuid={this.props.uuid}
      //           source={this.props.source}
      //           destination={this.props.destination}
      //           updateTimeline={this.updateTimeline}
      //           updateStep={this.updateStep}
      //           getCurrentDate={this.props.getCurrentDate}
      //         />
      //   {/* <PORequest
      //     updateTimeline={this.updateTimeline}
      //     updateStep={this.updateStep}
      //   /> */}
      // </div>
      <div>
        <div className={this.state.showFrontPage ? "" : "hide-front-page"}>
          <div className="col-sm-12 frontpage-navigator">
            <div className="text-center text-default">
              <h1>Blockchain for Trade Logistics</h1>
            </div>
            <hr />
            <div className="centerSVG">
              <span className="fa fa-bank" />
              <span className="fa fa-bank" />
              <span className="fa fa-bank" />
              <span className="fa fa-bank" />
              <span className="fa fa-bank" />
              <span className="fa fa-bank" />
              <span className="fa fa-bank" />
            </div>
            <span className="fa fa-money" />
          </div>
          <div className="col-sm-12">
            <PORequest
              uuid={this.props.uuid}
              source={this.props.source}
              destination={this.props.destination}
              updateTimeline={this.updateTimeline}
              updateStep={this.updateStep}
              getCurrentDate={this.props.getCurrentDate}
            />
          </div>
        </div>
        <div
          className={
            this.state.showTimeline ? "timeline-show" : "timeline-hide"
          }
        />
      </div>
    );
  }
}

// export class App

// var $ = require("jquery");

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // users: []
//       showTimeline: false,
//       showFrontPage: true,
//       records: [{}]
//     };
//   }

//   componentWillMount() {
//     console.log("here");
//     $.ajax({
//       method: "post",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//       data: $.param({
//         username: "m6",
//         orgName: "fed-org"
//       }),
//       url: "http://ustr-erl2-2357.na.uis.unisys.com:4000/users",
//       async: false,
//       success: function(resp) {
//         console.log(resp);
//         localStorage.setItem("token", resp.token);
//       }
//     });
//   }
//   componentDidMount() {
//     var that = this;
//     var settings = {
//       async: true,
//       crossDomain: true,
//       url:
//         "http://ustr-erl2-2357.na.uis.unisys.com:4000/channels/fedchannel/chaincodes/uni-fed/?peer=peer1&args=[%22query%22,%22{\\%22selector\\%22:{\\%22docType\\%22:\\%22hlFederalEvent\\%22}}%22]&chaincodeVersion=v0&fcn=query",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + localStorage.getItem("token"),
//         "x-access-token": localStorage.getItem("token")
//       }
//     };

//     $.ajax(settings).done(function(response) {
//       that.setState({
//         records: response
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         {" "}
//         {/* <Export /> */}
//         {/* <AppLogin /> */}
//         {/* <div className="table table-hover table-striped table-responsive">
//           <table>
//             <tbody>
//               {this.state.records.map(record => (
//                 <tr>
//                   <td>{record.Key}</td>
//                   <td>{record.Key}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div> */}
//         <div className={this.state.showFrontPage ? "" : "hide-front-page"}>
//           {" "}
//           {/* <table className="table table-striped table-hover table-responsive">
//                   <tbody>
//                     {this.state.users.map(user => (
//                       <tr>
//                         <td style={{ "font-weight": "bold" }}>{user.Key}</td>
//                         <td style={{ "font-weight": "bold" }}>
//                           {user.Record["action"]}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table> */}
//           <div className="col-sm-12 frontpage-navigator">
//             <div className="text-center text-default">
//               <h5> Blockchain for Trade Logistics </h5>{" "}
//             </div>{" "}
//             <hr />
//             <span>{this.props.source}</span>
//             <div className="centerSVG">
//               <span className="fa fa-bank" />
//               <span className="fa fa-bank" />
//               <span className="fa fa-bank" />
//               <span className="fa fa-bank" />
//               <span className="fa fa-bank" />
//               <span className="fa fa-ship" />
//               <span className="fa fa-ship" />
//               <span className="fa fa-bank" />
//               <span className="fa fa-bank" />
//               <span className="fa fa-bank" />
//             </div>{" "}
//             <span>{this.props.destination}</span>
//           </div>{" "}
//           <div className="col-sm-6">
//             {console.log(this.state.records)}
//             <div className="col-sm-12 list-box">
//               Hello{" "}
//               <div className="btn btn-primary btn-block"> Packing list </div>{" "}
//               <div className="btn btn-primary btn-block" />
//               <div className="btn btn-primary btn-block" />
//               <div className="btn btn-primary btn-block" />
//               <div className="btn btn-primary btn-block" />
//               <div className="btn btn-primary btn-block" />
//             </div>{" "}
//             <div className="col-sm-12 list-box">
//               <div className="text-center">
//                 <span> Blockchain </span>{" "}
//               </div>{" "}
//             </div>{" "}
//           </div>{" "}
//           <div className="col-sm-6">
//             <Exporter />
//           </div>{" "}
//         </div>{" "}
//         <div
//           className={
//             this.state.showTimeline ? "timeline-show" : "timeline-hide"
//           }
//         >
//           <Timeline />
//         </div>{" "}
//       </div>
//     );
//   }
// }

// export default App
