import React from "react";
import "./iinsurance.css"
import TaxDetail from "./../taxandcustomdetail/taxanddetail"

export default class Insurance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          formSubmitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
      handleSubmit() {
        //this.props.updateStep(2);
        this.setState({
          formSubmitted: true
        });
      }
      handleClick() {
        //this.props.updateTimeline(50);
      }
  render() {
    switch (this.state.formSubmitted) {
        case false:
    return (<div className="outer-layer-billoflading">
          <div className="form-bill-of-lading">
                    <form>
                        <div className="input-div">
                            <span className="para-wrap">
                                <p classname="para">UUID :</p>
                            </span>
                            <div>
                                <input type="text" name="name" placeholder="UUID"></input>
                            </div>
                        </div>
                        <div className="input-div">
                        <span className="para-wrap">
                                <p classname="para">STEPS :</p>
                            </span>
                            <div>
                                <input type="text" name="name" placeholder="STEPS"></input>
                            </div>
                        </div>
                        <div className="input-div">
                        <span className="para-wrap">
                                <p classname="para">STATUS :</p>
                            </span>
                            <div>
                                <input type="text" name="name" placeholder="STATUS"></input>
                            </div>
                        </div>
                        <div className="input-div">
                        <span className="para-wrap">
                                <p classname="para">DATE :</p>
                            </span>
                            <div>
                                <input type="text" name="name" placeholder="DATE FIELD"></input>
                            </div>
                        </div>
                        <div className="input-div">
                        <span className="para-wrap">
                                <p classname="para">SHIPPER :</p>
                            </span>
                            <div>
                                <input type="text" name="name" placeholder="ORGANISATIONAL DETAILS"></input>
                            </div>
                        </div>
                        <div className="input-div">
                        <span className="para-wrap">
                                <p classname="para">CONSIGNEE :</p>
                            </span>
                            <div>
                                <input type="text" name="name" placeholder="SENSOR TYPES"></input>
                            </div>
                        </div>
                        <div className="input-div">
                        <span className="para-wrap">
                                <p classname="para">LOCAL VESSEL :</p>
                            </span>
                            <div>
                                <input type="text" name="name" placeholder="NUMBER OF SENSORS"></input>
                            </div>
                        </div>
                        <div className="input-div">
                        <span className="para-wrap">
                                <p classname="para">PORT OF DISCHARGE :</p>
                            </span>
                            <div>
                                <input type="text" name="name" placeholder="COST OF SENSORS"></input>
                            </div>
                        </div>
                        <div>
                            <input className="submit-button" type="submit" value="Submit" onClick={this.handleSubmit} />
                        </div>
                    </form>
                    </div>
    </div>
  );
  case true:
return <TaxDetail  uuid={this.props.uuid}
source={this.props.source}
destination={this.props.destination}
  getCurrentDate={this.props.getCurrentDate}
  updateStep={this.props.updateStep}
  pageSubmit={this.props.pageSubmit}/>;
}
  }
}
