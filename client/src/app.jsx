import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import helper from "../../helper/clientHelper.js";

import Form from "./components/Form.jsx";
import Heading from "./components/Heading.jsx";
import Tracker from "./components/Tracker.jsx";
import ColorList from "./components/ColorList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}, // {red: [{}, ...], yellow: [{}, ...], ...}
      colorCount: {
        red: 0,
        yellow: 0,
        orange: 0,
        green: 0,
        blue: 0,
        purple: 0,
        black: 0,
        white: 0
      },
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

        var state = helper.convertDataForState(response.data);
        this.setState(state);
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
        <Heading colorCount={this.state.colorCount} total={this.state.total} />
        <Tracker colorCount={this.state.colorCount} />
        <ColorList allItems={this.state.data}/>
        <Form handleAdd={this.handleAdd}/>
      </div>
    )
  }
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);