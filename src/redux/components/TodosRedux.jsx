import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos, __deleteTodo, __editTodo } from "../modules/todoSlice";

const TodosRedux = () => {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    content: "",
  });
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const handleOnSubmit = (id) => {
    const newTodo = {
      id: id,
      title: todo.title,
      content: todo.content,
    };
    dispatch(__editTodo(newTodo));
  };

  const handOnClickDeleteTodo = (payload) => {
    dispatch(__deleteTodo(payload));
  };

  if (isLoading) {
    return <div>로딩 중</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return todos.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.title}</div>
        <div>{item.content}</div>
        <button onClick={() => handOnClickDeleteTodo(item.id)}>삭제</button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleOnSubmit(item.id);
          }}
        >
          <button>수정</button>
          <input
            onChange={(e) => {
              const { name, value } = e.target;
              setTodo({ ...todo, [name]: value });
            }}
            name="title"
          />
          <input
            onChange={(e) => {
              const { name, value } = e.target;
              setTodo({ ...todo, [name]: value });
            }}
            name="content"
          />
        </form>
      </div>
    );
  });
};

export default TodosRedux;
