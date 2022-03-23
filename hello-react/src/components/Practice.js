import { Component } from "react";

class Practice extends Component {
  render() {
    var name = ["눈사람", "얼음", "눈", "바람"];
    var nameList = name.map((names, index) => <li key={index}>{names}</li>);
    return <ul>{nameList}</ul>;
  }
}
export default Practice;
