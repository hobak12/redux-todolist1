import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { minusNumber, _addNumber } from "../modules/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);
  const [num, setNum] = useState("");

  const handleOnChangeNum = (event) => {
    setNum(event.target.value);
  };

  const handleOnClickPlusNum = (payload) => {
    dispatch(_addNumber(+payload));
  };

  const handleOnClickMinusNum = (payload) => {
    dispatch(minusNumber(+payload));
  };
  return (
    <div>
      {number}
      <input onChange={handleOnChangeNum} value={num} type="number" />
      <button onClick={() => handleOnClickPlusNum(num)}>+</button>{" "}
      <button onClick={() => handleOnClickMinusNum(num)}>-</button>
    </div>
  );
};

export default Counter;
