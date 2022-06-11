import React from "react";
import ItemList from "./ItemList.jsx";

function ColorList(props) {
  var colors = Object.keys(props.colorCount);
  return (
    <div>
      <h2>The Rainbow List</h2>
      <div>{colors.map(color => {
        return (
          <div>
            <h4>{color}</h4>
            {props.allItems[color] &&
              <ItemList items={props.allItems[color]} key={color} handleClick={props.handleClick}/>
            }
          </div>
        )
      })}</div>
    </div>
  )
}

export default ColorList;