import { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
class App extends Component {
  render() {
    const name = "react";
    return (
      <div className="react">
        {name}
        <MyComponent name="react2" />
        <MyComponent name="react3" />
        <MyComponent name="react4" />
        <MyComponent name="react5" />
      </div>
    );
  }
}

export default App;
