import React from "react";

function ItemList(props) {
  var list = props.items.map(item => {
    if (item.count) {
      return <span key={item._id}>{item.name} {item.count}, </span>
    } else {
      return <span key={item._id}>{item.name}, </span>
    }
  })

  return (
    <div>{list}</div>
  )
}

export default ItemList;