import PropTypes from "prop-types";
function MyComponent({ hello, children }) {
  return (
    <div>
      나의 {hello} 멋진 {children} 컴포넌트
    </div>
  );
}
MyComponent.propTypes = {
  hello: PropTypes.string,
};
export default MyComponent;
