import "./single.scss";
const Single = () => {
  return <div className="single">
    <div className="view">
      <div className="info">
        <div className="topInfo">
          <img src="" alt="" />
          <h1>John Doe</h1>
          <button>Update</button>
        </div>
        <div className="details">
          <div className="item">
            <div className="itemTitle">Username:</div>
            <div className="itemValue">John Doe</div>
          </div>
        </div>
      </div>
      <div className="chart">
        
      </div>
    </div>
    <div className="activities"></div>
  </div>;
};

export default Single;
