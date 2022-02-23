import PropTypes from "prop-types";
import { Component } from "react";
class MyComponent extends Component {
  render() {
    const { hello, children } = this.props;
    return (
      <div>
        나의 {hello} 멋진 {children} 컴포넌트
      </div>
    );
  }
}
MyComponent.propTypes = {
  hello: PropTypes.string,
};
export default MyComponent;
