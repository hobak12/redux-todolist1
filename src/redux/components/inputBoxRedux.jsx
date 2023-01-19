import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { __addTodo } from "../modules/todoSlice";
import { useSelector } from "react-redux";

const InputBoxRedux = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    content: "",
  });
  const handleOnSubmitAddTodo = (todo) => {
    const newTodo = {
      id: uuid(),
      title: todo.title,
      content: todo.content,
    };

    dispatch(__addTodo(newTodo));
  };

  const { isLoading, error } = useSelector((state) => state.todo);
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <div>로딩 중</div>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleOnSubmitAddTodo(todo);
      }}
    >
      <label htmlFor="title">제목</label>
      <input
        onChange={(e) => {
          const { id, value } = e.target;
          setTodo({ ...todo, [id]: value });
        }}
        id="title"
      />
      <label htmlFor="content">내용</label>
      <input
        onChange={(e) => {
          const { id, value } = e.target;
          setTodo({ ...todo, [id]: value });
        }}
        id="content"
      />
      <button>추가</button>
    </form>
  );
};

export default InputBoxRedux;
