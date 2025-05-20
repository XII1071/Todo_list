import Header from "./component/Header";
import "./App.css";
import Editor from "./component/Editor";
import List from "./component/List";
import { useState, useRef } from "react";

const mockdata = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Java 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "AWS 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockdata);
  const idRef = useRef(3);
  // 초기값에 3은 목데이터에 배열이 3개가 있기 때문에
  //목데이터를 삭제할경우 "0"

  //생성, 추가
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++, //id값이 1씩 증가
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
  };

  const onUpdate = (targetId) => {
    // todos 에 id값과 targetId값이 일치할 경우
    // map 메서드를 사용하여 새 배열 반환
    // isDone: false -> true (!true)
    setTodos(
      todos.map((item) =>
        item.id === targetId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const onDelete = (targetId) => {
    // setTodos에 todos 배열에서 filter메서드를 사용하여
    // item id값과 targetId가 일치하는 것을 제외한
    // 배열로 반환
    setTodos(todos.filter((item) => item.id !== targetId));
  };

  return (
    <div className="wrap">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
