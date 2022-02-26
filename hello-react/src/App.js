import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Attribute from "./components/Attribute";
import Nav from "./components/Nav";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Header: { title: "Web", sub: "World wide Web" },
      Nav: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for information" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for information" },
      ],
      Attribute: { title: "HTML", sub: "HTML is HyperText" },
    };
  }
  render() {
    return (
      <div>
        <Header
          title={this.state.Header.title}
          sub={this.state.Header.sub}
        ></Header>
        <Nav data={this.state.Nav}></Nav>
        <Attribute
          title={this.state.Attribute.title}
          sub={this.state.Attribute.sub}
        ></Attribute>
      </div>
    );
  }
}

export default App;
