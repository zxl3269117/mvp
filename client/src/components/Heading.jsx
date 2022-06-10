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
    colorMessage = <p>Paint your plate with some <em>{missedColors[0]}</em>!</p>
  }

  // construct total count message
  if (props.total < 28) {
    totalMessage = <p><em>{28 - props.total}</em> more cups to go! You can do it!</p>
  } else {
    totalMessage = <h5>You beat 95% of Americans!</h5>
  }

  return (
    <div>
      <h3>One color at a time, paint your plate with veggies and fruits!</h3>
      <p>When you eat a cup of vegetable or 1 piece of fruit, click the name to add your intakes. The app will track everything for you. Enjoy the challenge and the boost of your health!</p>
      <h4>{colorMessage}</h4>
      <h4>{totalMessage}</h4>
    </div>
  )

}

export default Heading;