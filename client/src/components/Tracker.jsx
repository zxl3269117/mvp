import React from "react";

function Tracker(props) {
  var colorMessage, totalMessage, tracker;
  if (props.count < 28) {
    totalMessage = <p>{28 - props.count} more colors to go! You can do it!</p>
  } else {
    totalMessage = <h5>You beat 95% of Americans!</h5>
  }

  // if all colors in colorCount has >0 value
  if (props.colorCount) {

  }

  return (
    <div>
      <h2>Make your body ooooh happy by hitting the goal!</h2>
      <p>__ more colors to go</p>
      <p>__ more cups to go</p>
      <h2>Display trackers showing number of veggies/fruit in each color AND the total number</h2>
    </div>
  )
}

export default Tracker;