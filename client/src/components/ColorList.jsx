import React from "react";
import ItemList from "./ItemList.jsx";

function ColorList(props) {
  var colors = Object.keys(props.allItems);
  return (
    <div>
      <h2>The Rainbow List</h2>
      <div>{colors.map(color => {
        return (
          <div>
            <h4>{color}</h4>
            <ItemList items={props.allItems[color]} key={color}/>
          </div>
        )
      })}</div>
    </div>
  )
}

export default ColorList;