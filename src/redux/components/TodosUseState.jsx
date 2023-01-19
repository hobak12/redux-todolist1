const TodosUseState = ({
  todos,
  handleOnClickUpdateTodo,
  handleOnClickDeleteTodo,
  todo,
  setTodo,
}) => {
  return (
    <div>
      {todos?.map((item) => {
        return (
          <div key={item.id}>
            <div>제목: {item.title}</div>
            <div>내용: {item.content}</div>
            <button
              type="button"
              onClick={() => handleOnClickDeleteTodo(item.id)}
            >
              삭제
            </button>

            <button
              type="button"
              onClick={() => handleOnClickUpdateTodo(item.id)}
            >
              수정
            </button>
            <input
              type="text"
              placeholder="제목 수정 값 입력"
              onChange={(e) => {
                const { name, value } = e.target;
                setTodo({ ...todo, [name]: value });
              }}
              id="edit"
              name="title"
            />
            <input
              type="text"
              placeholder="내용 수정 값 입력"
              onChange={(e) => {
                const { name, value } = e.target;
                setTodo({ ...todo, [name]: value });
              }}
              id="edit"
              name="content"
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodosUseState;
