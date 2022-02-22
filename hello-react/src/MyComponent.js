function MyComponent(props) {
  const { hello, children } = props;
  return (
    <div>
      나의 {hello} 멋진 {children} 컴포넌트
    </div>
  );
}
export default MyComponent;
