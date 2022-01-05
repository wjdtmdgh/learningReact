function App() {
  const name = '리액트';
  const style = {
    backgroundcolor: 'black',
    color: 'aqua',
    fontsize : '48px',
    fontweight : 'bold',
    padding: 16
  };
  return (
    <div style={style}>{name}
    </div>
  );
}

export default App;
