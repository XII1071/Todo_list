import { useState } from "react";
import TodoItem from "./TodoItem";
import "./List.css";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    // search 값에 ""(빈 문자열)일 경우 todos 보이게 (삼항 연산자)
    // 빈 문자열이 아닐경우 search에 입력된 글자를 content에서 찾아서
    // filter 메서드를 사용해서 todos에서 새로운 배열로 보여주시오
    return search === ""
      ? todos
      : todos.filter((item) =>
          item.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <section className="list">
      <h2>Todo List 📗</h2>
      <input
        onChange={onChangeSearch}
        className="search"
        placeholder="검색어를 입력하세요!"
      />
      {getSearchResult().map((item) => {
        return (
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      })}
    </section>
  );
};
export default List;
