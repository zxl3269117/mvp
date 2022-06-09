import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

import Form from "./components/Form";
import Tracker from "./components/Tracker";
import ItemList from "./components/ItemList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
        this.setState({ data: response.data });
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
        // axios.get("/index")
        //   .then(response => {
        //     this.setState({ data: response.data});
        //   })
        //   .catch( err => console.log(err) );
      })
      .catch( err => console.log(err) );
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Rainbow Challenge!</h1>
        <Form handleAdd={this.handleAdd}/>
        <Tracker />
        <ItemList />
      </div>
    )
  }
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);