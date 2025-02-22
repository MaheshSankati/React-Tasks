import React, { Component } from "react";
import "./evenodd.css"

class EvenOdd extends Component {
  constructor() {
    super();
    this.state = { number: "", result: "" };
  }

  handleInput = (e) => {
    const num = e.target.value;
    this.setState({ number: num });
  };

  handleEvenOdd = (event) => {
    event.preventDefault();
    const { number } = this.state;

    if (number % 2 === 0) {
      this.setState({ result: ` ${number} is a Even Number.` });
    } else if (number % 2 === 1) {
      this.setState({ result: ` ${number} is Odd Number.` });
    } else {
      this.setState({ result: "Please enter a valid number." });
    }
  };

  render() {
    return (
      < >
        <center>
          <div className="container">
          <form  onSubmit={this.handleEvenOdd}>
            <label for="number">Enter the Number : </label>
            <input type="text" name="number" onChange={this.handleInput} />
            <br />
            <br />
            <input type="submit" className="sub"/>
            <h1>{this.state.result}</h1>
          </form>
          </div>
        </center>
      </>
    );
  }
}
export default EvenOdd;
