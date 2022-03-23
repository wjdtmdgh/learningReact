import { useState } from "react";

const Practice = () => {
  const [names, setNames] = useState([
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
    setInputText("");
    setNames(nextNames);
    setNextId(nextId + 1);
  };
  const onRemove = (id) => {
    console.log(id);
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};
export default Practice;
