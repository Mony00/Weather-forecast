import React from "react";

class Counter extends React.Component {
  //equivalent to state initializing
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    // do this to bind this to the state changes so that when called in onclickit works
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    console.log(this);
    this.setState((currntState) => {
      return { count: currntState.count - 1 };
    });
  }
  handleIncrement() {
    console.log(this);
    this.setState((currntState) => {
      return { count: currntState.count + 1 };
    });
  }

  render() {
    const date = new Date("jun 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {" "}
          {date.toDateString()}
          {this.state.count}
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
export default Counter;
