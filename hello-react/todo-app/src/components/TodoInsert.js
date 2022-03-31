import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //value값 초기화
      //submit이벤트는 브라우저에서 새로고침을 발생시킵니다
      //이를 방지하기위해 이 함수를 호출
      e.preventDefault();
    },
    [onInsert, value],
  );
  //onClick 이벤트로 대체가능
  //   const onClick = useCallback(() => {
  //     onInsert(value);
  //     setValue('');
  //   }, [onInsert, value]);
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;
