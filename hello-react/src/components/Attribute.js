import { Component } from "react";

class Attribute extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.desc}</h2>
      </div>
    );
  }
}
export default Attribute;
