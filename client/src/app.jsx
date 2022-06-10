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
        orange: 0,
        yellow: 0,
        green: 0,
        blue: 0,
        ['purple/black']: 0,
        ['white/tan']: 0
      },
      total: 0,
      error: ''
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
        this.setState({ error: err });
      })
  }

  handleAdd(add) {
    console.log(`adding ${add.name}`);

    // clear the error state
    this.setState({ error: '' });

    axios.post("/add-item", {
      name: add.name,
      color: add.color,
      category: add.category
    })
    .then(response => {
      console.log("post successfully");
      this.getAll();
    })
    .catch( err => {
      console.log(err)
      // set the error state if server responded with error
      this.setState({ error: err });
    });
  }

  handleClick(item) {
    item.count ++;
    console.log(`ate ${item.name}, now ${item.count}`);

    axios.patch('/click-item', item)
      .then(success => {
        this.getAll();
      })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Rainbow Challenge!</h1>
        <Heading colorCount={this.state.colorCount} total={this.state.total} />
        <Tracker colorCount={this.state.colorCount} />
        <ColorList allItems={this.state.data} colorCount={this.state.colorCount} handleClick={this.handleClick}/>
        <Form handleAdd={this.handleAdd} error={this.state.error}/>
      </div>
    )
  }
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);