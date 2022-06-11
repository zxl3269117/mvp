import React from "react";
import _ from "underscore";
import helper from "../../../helper/clientHelper.js";

function Tracker(props) {
  var tracker = [];

  // construct color trackers list
  for(var color in props.colorCount) {
    tracker.push(<li key={color}>{color}: {props.colorCount[color]}</li>);
  }

  return (
    <div>
      <ul>Color status:
        {tracker}
      </ul>
      <button onClick={props.handleReset}>Start a new week</button>
    </div>
  )
}

export default Tracker;