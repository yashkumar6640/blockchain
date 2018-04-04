import React from "react";

import HorizontalTimeline from "react-horizontal-timeline";
const VALUES = [
  "2014/01/16",
  "2014/02/28",
  "2014/04/20",
  "2014/05/20",
  "2014/07/09",
  "2014/08/30",
  "2014/09/15",
  "2014/11/01",
  "2014/12/10"
];
export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      previous: 0
    };
  }

  render() {
    return (
      // <div className="list-box-rightview">
      //   <div class="text-center">
      //     <h1>Exporter View</h1>
      //   </div>
      // </div>
      <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: "80%", height: "100px", margin: "0 auto" }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={index => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES}
            // minEventPadding={100}
          />
        </div>
        <div className="text-center">
          {/* any arbitrary component can go here */}
          <Test />
          {this.state.value}
        </div>
      </div>
    );
  }
}

class Test extends React.Component {
  render() {
    return <div className="list-box-rightview">I am in test</div>;
  }
}
