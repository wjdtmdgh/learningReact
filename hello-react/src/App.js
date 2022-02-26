import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Attribute from "./components/Attribute";
import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div>
        <Header title="WEB" sub="World wide World"></Header>
        <Nav></Nav>
        <Attribute title="HTML" sub="HTML is HyperText"></Attribute>
      </div>
    );
  }
}

export default App;
