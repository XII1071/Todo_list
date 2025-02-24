import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 1초마다 시간을 업데이트하는 타이머 설정
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 컴포넌트가 언마운트될 때 인터벌 해제
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <h1>
        <span>오늘은 📆</span>
        {currentTime.toLocaleDateString("ko-KR")}
        <div></div>
        <span className="time-text">
          {currentTime.toLocaleTimeString("ko-KR")}
        </span>
      </h1>
    </header>
  );
};

export default Header;
