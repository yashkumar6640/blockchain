// import React, { Component } from "react";
// import Routes from "./route.js";
// import About from "./components/about/About.js";
// import Home from "./components/home/Home.js";
// import Important from "./components/important/Important.js";
// import Calendar from "./components/calendar/Calendar.js";
// import Starred from "./components/starred/Starred.js";
// import SentMail from "./components/sentMail/SentMail.js";
// import Inbox from "./components/inbox/Inbox.js";
// import NewMail from "./components/newmail/NewMail.js";

// import { Switch, Route, Link } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
// var $ = require("jquery");

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       db: {},
//       inbox: [{}]
//     };
//   }
//   componentWillUpdate(nextProps, nextState) {
//     console.log(nextState);
//     var inbox = [{}];
//     var db = {};
//     if (nextState.inbox) {
//       inbox = nextState.inbox;
//     }
//     if (nextState.db) {
//       db = nextState.db;
//       window.gdb = nextState.db;
//     }
//     console.log(db);
//     var that = this;
//     var request;
//     if (inbox.length > 1 && db.name !== undefined) {
//       inbox.forEach(function(mail) {
//         request = db
//           .transaction(["inbox"], "readwrite")
//           .objectStore("inbox")
//           .add(mail);
//       });
//       request.onsuccess = function(event) {
//         console.log("added");
//       };
//       request.onerror = function(event) {
//         console.log("failure");
//       };
//     }
//   }

//   componentDidMount() {
//     var that = this;
//     $.ajax({
//       url: "api/inbox/data.json",
//       method: "get",
//       success: function(response) {
//         that.setState({
//           inbox: response
//         });
//       }
//     });
//     const mails = [
//       {
//         name: "",
//         subject: "",
//         toa: ""
//       }
//     ];
//     var that = this;
//     var db;
//     var request = window.indexedDB.open("mailsDb", 1);

//     request.onerror = function(event) {
//       alert("Error while connecting");
//     };
//     request.onsuccess = function(event) {
//       console.log("Inside App.js success");
//       that.setState({
//         db: request.result
//       });
//     };

//     request.onupgradeneeded = function(event) {
//       console.log(event);

//       var db = event.target.result;
//       var inboxStore = db.createObjectStore("inbox", { keyPath: "name" });
//       var starStore = db.createObjectStore("star", { keyPath: "name" });
//       var importantStore = db.createObjectStore("important", {
//         keyPath: "name"
//       });
//       var sentMailStore = db.createObjectStore("sentMail", {
//         keyPath: "name"
//       });
//       console.log(inboxStore, starStore, importantStore, sentMailStore);
//     };
//   }

//   render() {
//     var db = this.state.db;
//     return (
//       <div className="container-fluid">
//         <nav class="nav navbar-default navbar-fixed-top">
//           <div className="navbar-header">
//             <Link to="/">
//               <a className="navbar-brand">Mailbox</a>
//             </Link>
//           </div>
//         </nav>
//         <div style={{ margin: "60px 0" }}>
//           <div className="col-sm-2">
//             <ul className="nav nav-pills nav-stacked" role="tablist">
//               <li>
//                 <button className="btn btn-danger">
//                   <Link to="/newmail">Compose</Link>
//                 </button>
//               </li>
//               <li>
//                 <Link to="/inbox">Inbox</Link>
//               </li>
//               <li>
//                 <Link to="/starred">Starred</Link>
//               </li>
//               <li>
//                 <Link to="/important">Important</Link>
//               </li>
//               <li>
//                 <Link to="/sentmail">Sent Mail</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col-sm-10">
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route
//                 path="/newmail"
//                 render={db => <NewMail db={this.state.db} />}
//               />
//               <Route
//                 path="/inbox"
//                 render={db => <Inbox db={this.state.db} />}
//               />
//               <Route
//                 path="/starred"
//                 render={db => <Starred db={this.state.db} />}
//               />
//               <Route
//                 path="/important"
//                 render={db => <Important db={this.state.db} />}
//               />
//               {/* <Route path="/sentmail" component={SentMail} /> */}
//               <Route
//                 path="/sentmail"
//                 render={db => <SentMail db={this.state.db} />}
//               />
//             </Switch>
//           </div>
//         </div>
//         <nav className="nav navbar-default navbar-fixed-bottom">
//           Copyright &copy;
//         </nav>
//       </div>
//     );
//   }
// }

// export default App;
