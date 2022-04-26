import React, { Component } from "react";
import DaysCounter from "./DaysCounter";

class DaysTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "May, 31, 2022"};
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown To Graduation</div>
        <div className="App-date">{this.state.deadline}</div>
        <DaysCounter deadline={this.state.deadline} />
      </div>
    );
  }
}
export default DaysTimer;
