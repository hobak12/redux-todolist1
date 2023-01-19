const InputBoxUseState = ({ todo, setTodo, handleOnSubmitAddTodo }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleOnSubmitAddTodo(todo);
      }}
    >
      <label htmlFor="title">제목</label>
      <input
        type="text"
        onChange={(e) => {
          const { name, value } = e.target;
          setTodo({ ...todo, [name]: value });
        }}
        id="title"
        name="title"
      />
      <label htmlFor="content">내용</label>
      <input
        type="text"
        onChange={(e) => {
          const { name, value } = e.target;
          setTodo({ ...todo, [name]: value });
        }}
        id="content"
        name="content"
      />
      <button>추가</button>
    </form>
  );
};

export default InputBoxUseState;
