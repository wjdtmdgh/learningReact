import { Component } from "react";

class Nav extends Component {
  render() {
    var i = 0;
    var lists = [];
    var data = this.props.data;
    while (i < data.length) {
      lists.push(
        <li>
          <a href={"/Nav" + data[i].id}>{data[i].title}</a>
        </li>
      );
      i = i + 1;
    }
    return (
      <div>
        <ul>{lists}</ul>
      </div>
    );
  }
}
export default Nav;
