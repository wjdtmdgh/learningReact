import { Component } from "react";
class Attribute extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <b>{this.props.sub}</b>
      </header>
    );
  }
}
export default Attribute;
