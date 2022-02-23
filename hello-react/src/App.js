import { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
class App extends Component {
  render() {
    return (
      <div className="react">
        <MyComponent hello={3}>정승호</MyComponent>
      </div>
    );
  }
}

export default App;
