import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

import Form from "./components/Form.jsx";
import Tracker from "./components/Tracker.jsx";
import ColorList from "./components/ColorList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      colorCount: {},
      total: 0
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    axios.get("/index")
      .then(response => {
        console.log(response.data);

        var total = 0;
        var colorCount = {};

        // conver data ===> {red: [], yellow: [], ...}
        // count total along the way
        var convertedData = response.data.reduce((accumulator, item) => {
          var color = item.color;
          var count = item.count;

          // count total
          total += count;

          // count color
          if (count) {
            colorCount[color] = colorCount[color] ? colorCount[color] += count : 1;
            // if (colorCount[color]) {
            //   colorCount[color] += count;
            // } else {
            //   colorCount[color] = 1;
            // }
          }

          if(accumulator[color]) {
            accumulator[color].push(item);
          } else {
            accumulator[color] = [item];
          }
          return accumulator;
        }, {})

        console.log(convertedData);
        this.setState({
          data: convertedData,
          colorCount: colorCount,
          total: total
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleAdd(add) {
    console.log(`${add.name} has been added`);
    axios.post("/add-item", {
      name: add.name,
      color: add.color,
      category: add.category
    })
      .then(response => {
        console.log("post successfully");
        this.getAll();
      })
      .catch( err => console.log(err) );
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Rainbow Challenge!</h1>
        <Tracker colorCount={this.state.colorCount} total={this.state.total}/>
        <Form handleAdd={this.handleAdd}/>
        <ColorList allItems={this.state.data}/>
      </div>
    )
  }
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);