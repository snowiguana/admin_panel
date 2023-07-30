import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>No1GrTheta</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="icon" className="icon" />
        <img src="/app.svg" alt="icon" className="icon" />
        <img src="/expand.svg" alt="icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg"
            alt=""
          />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="icon" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
