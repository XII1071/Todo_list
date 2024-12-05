import "./Header.css";
const Header = () => {
  return (
    <header>
      <h1>
        <span>오늘은 📆</span>
        {new Date().toLocaleDateString()}
      </h1>
    </header>
  );
};
export default Header;
