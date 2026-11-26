import "./Header.css";

const Header = () => {
  const handleViewMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favorite food here</h2>
        <p>gfds fckdj vfdbvf jfhvbn fklgb ivfb kvjnhgk fbnkfl dxf cvhye cvgc jddkghtk jfjksx jkevg hbkjf cnf gkr lthsgd nmsr klrfih aekfql ivfb kvjnhgk fbnkfl dxf cvhye cvgc jddkghtk jfjksx jkevg hbkjf cnf gkr lthsgd nmsr klrfih aekfql.</p>
        <button type="button" onClick={handleViewMenu}>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
