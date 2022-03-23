import { useState } from "react";

const Practice = () => {
  const [names, setnames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "눈" },
    { id: 3, text: "바람" },
    { id: 4, text: "눈꽃" },
  ]);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setnames(nextNames);
    setInputText("");
  };
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};
export default Practice;
