function App() {
  const name = '리액트';
  let rtn='';
  if(name === '리액트'){
    rtn=(<h1>리액트안녕</h1>);
  }
  else{
    rtn=(<h2>잘 작동하냐</h2>)
  }
  return (
    <div>
      {rtn}
    </div>
  );
}

export default App;
