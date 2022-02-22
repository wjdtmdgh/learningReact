import { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
class App extends Component {
  render() {
    const name = "react";
    return (
      <div className="react">
        {name}
        <MyComponent>정승호</MyComponent>
      </div>
    );
  }
}

export default App;
