import React from "react";
import _ from "underscore";
import helper from "../../../helper/clientHelper.js";

function Heading(props) {
  var colorMessage, totalMessage;

  // construct color message
  var missedColors = helper.missedColors(props.colorCount);
  if(missedColors.length === 0) {
    colorMessage = <p>Woo-hoo! You painted a rainbow!</p>
  } else {
    colorMessage = <p>Paint your plate with some <em>{missedColors[0]}</em>!</p>
  }

  // construct total count message
  if (props.total < 28) {
    totalMessage = <p><em>{28 - props.total}</em> more cups to go! You can do it!</p>
  } else {
    totalMessage = <p>You beat <em>95%</em> of Americans!</p>
  }

  return (
    <div>
      <h3>One color at a time, paint your plate with veggies and fruits!</h3>
      <p>Rule #1: When you eat 1 serving of vegetable or fruit, click it to add. The tracker shows how you're doing so far.</p>
      <p>Rule #2: 1 serving is 1/2 cup chopped vegetable, 1 cup leafy vegetable, 1/2 cup fruit, 1 small piece of fruit.</p>
      <p>Enjoy the challenge and the boost of your health!</p>
      <h3>Rainbow Meter</h3>
      <h4>{colorMessage}</h4>
      <h4>{totalMessage}</h4>
    </div>
  )

}

export default Heading;