import React from "react";
import _ from "underscore";
import helper from "../../../helper/clientHelper.js";

function Tracker(props) {
  var colorMessage, totalMessage;
  var tracker = [];

  console.log('color counts', props.colorCount);

  // construct color message
  var missedColors = helper.missedColors(props.colorCount);
  if(missedColors.length === 0) {
    colorMessage = <p>What a unicorn achievement!</p>
  } else {
    colorMessage = <p>Get some <em>{missedColors[0]}</em> on your plate!</p>
  }

  // construct total count message
  if (props.total < 28) {
    totalMessage = <p><em>{28 - props.total}</em> more cups to go! You can do it!</p>
  } else {
    totalMessage = <h5>You beat 95% of Americans!</h5>
  }

  // construct color trackers
  for(var color in props.colorCount) {
    tracker.push(<li key={color}>Total {color}: {props.colorCount[color]}</li>);
  }

  return (
    <div>
      <h2>One cup at a time, click on what you ate to boost your health!</h2>
      <div>{colorMessage}</div>
      <div>{totalMessage}</div>
      <ul>Color status
        {tracker}
      </ul>
    </div>
  )
}

export default Tracker;