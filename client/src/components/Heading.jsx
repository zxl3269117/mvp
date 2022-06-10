import React from "react";
import _ from "underscore";
import helper from "../../../helper/clientHelper.js";

function Heading(props) {
  var colorMessage, totalMessage;

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

  return (
    <div>
      <h2>One cup at a time, paint your plate with colors from veggies and fruits!</h2>
      <p>{colorMessage}</p>
      <p>{totalMessage}</p>
    </div>
  )

}

export default Heading;