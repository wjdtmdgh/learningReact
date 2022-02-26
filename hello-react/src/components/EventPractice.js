import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };
  render() {
    return (
      <div>
        <h1>이벤트연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        />
      </div>
    );
  }
}
export default EventPractice;
