import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var key = event.target.name
    this.setState({ [key]: event.target.value });
  }

  handleSubmit(event) {
    // POST request to server
  }

  render() {
    // render the form component that allows user to submit veggie/fruit with its name and color
    return (
      <form>
        <label>
          Name:
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange}></input>
        </label>
        <label>
          Color:
          <input type="text" value={this.state.color} name="color" onChange={this.handleChange}></input>
        </label>
        <input type="submit" onSubmit={this.handleSubmit}></input>
      </form>
    )
  }
}

export default Form;