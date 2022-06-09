import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "",
      category: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var key = event.target.name;
    this.setState({ [key]: event.target.value });
  }

  handleSubmit(event) {
    console.log('triggered?');
    this.props.handleAdd(this.state);
  }

  render() {
    return (
      <form>
        <h4>Not seeing what you had? Add it yourself!</h4>
        <label>
          Name:
          <input type="text" value={this.state.name} name="name" required onChange={this.handleChange}></input>
        </label>
        <label>
          {/* update to be a drop down single selection */}
          Color:
          <input type="text" value={this.state.color} name="color" required onChange={this.handleChange}></input>
        </label>
        <label>
          {/* update to be a drop down single selection */}
          Category:
          <input type="text" value={this.state.category} name="category" required onChange={this.handleChange}></input>
        </label>
        <input type="button" value="Add!" onClick={this.handleSubmit}></input>
      </form>
    )
  }
}

export default Form;