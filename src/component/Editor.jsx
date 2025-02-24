import { useState, useRef } from "react";
import "./Editor.css";
const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  // console.log(contentRef);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  //추가버튼 눌렀을때
  const onSubmit = () => {
    if (content === "") {
      // 빈 문자열이 입력되면
      contentRef.current.focus(); // input 포커스(커서)
      return; // 추가되지 않도록 반환
    }
    onCreate(content); //onCreate 함수 실행 (content 인수로 전달)
    setContent(""); //추가후 input 요소를 비워라
  };

  //엔터키를 눌렀을때 추가
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <section className="editor">
      <h2>새로운 Todo 작성하기 📌</h2>
      <div>
        <input
          ref={contentRef}
          onKeyDown={onKeyDown}
          value={content}
          onChange={onChangeContent}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </section>
  );
};
export default Editor;
