import { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          onChange={(e) => {
            console.log(e);
          }}
        />
      </div>
    );
  }
}
export default EventPractice;
