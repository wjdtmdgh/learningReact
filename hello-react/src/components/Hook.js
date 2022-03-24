import { useState, useMemo } from "react";

const getAvergage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Hook = () => {
  var [lists, setLists] = useState([]);
  var [number, setNumber] = useState("1");
  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onClick = (e) => {
    const nextInt = lists.concat(parseInt(number));
    setLists(nextInt);
    setNumber("");
  };
  const avg = useMemo(() => getAvergage(lists), [lists]);
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onClick}>등록</button>
      <ul>
        {lists.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <b>평균값 :</b> {avg}
    </div>
  );
};
export default Hook;
