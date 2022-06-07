import React from "react";
import ReactDOM from "react-dom";
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
  }

  componentDidMount() {
    axios.get("/index")
      .then(data => {
        this.setState({ data: data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>Rainbow Challenge!</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <Tracker />
        <ItemList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));