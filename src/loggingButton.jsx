import React from "react";

export class LoggingButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}
