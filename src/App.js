// src/App.js

import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.
import { v4 as uuid } from "uuid";
import Counter from "./redux/components/Counter";
import TodosRedux from "./redux/components/TodosRedux";
import TodosUseState from "./redux/components/TodosUseState";
import InputBoxUseState from "./redux/components/InputBox";
import InputBoxRedux from "./redux/components/inputBoxRedux";

const App = () => {
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    content: "",
  });

  // axios를 통해서 get 요청을 하는 함수를 생성합니다.
  // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchTodos();
  }, []);

  const handleOnSubmitAddTodo = async (todo) => {
    const newTodo = {
      id: uuid(),
      title: todo.title,
      content: todo.content,
    };
    await axios.post("http://localhost:3001/todos", newTodo);
    setTodos([...todos, newTodo]);
  };

  const handleOnClickDeleteTodo = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleOnClickUpdateTodo = async (id) => {
    await axios.patch(`http://localhost:3001/todos/${id}`, todo);
    const newTodoList = todos.map((item) =>
      item.id === id
        ? { ...todo, title: todo.title, content: todo.content }
        : item
    );
    setTodos(newTodoList);
  };

  // data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.
  // console.log(todos); // App.js:16

  return (
    <>
      {/* <Counter /> */}

      <InputBoxRedux />
      <TodosRedux />
      {/* 
      <InputBoxUseState
        todo={todo}
        setTodo={setTodo}
        handleOnSubmitAddTodo={handleOnSubmitAddTodo}
      />

      <TodosUseState
        todos={todos}
        handleOnClickUpdateTodo={handleOnClickUpdateTodo}
        handleOnClickDeleteTodo={handleOnClickDeleteTodo}
        todo={todo}
        setTodo={setTodo}
      /> */}
    </>
  );
};

export default App;
