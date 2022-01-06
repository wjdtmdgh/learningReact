function App() {
  const name = '리액트';
  return (
    <>
    {/* 주석은 이렇게 작성하여야 합니다. */}
    <div className="react">{name}</div>
    //하지만 이런 주석이나
    /*이런 주석은 페이지에 그대로 나타나게 됩니다. */
    <input />
    </>
  );
}

export default App;
