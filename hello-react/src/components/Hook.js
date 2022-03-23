import { useState, useEffect } from "react";

const Hook = () => {
  const [name, setName] = useState(0);
  const [nickname, setNickname] = useState(0);
  useEffect(() => {
    console.log(name);
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickname} />
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
export default Hook;
