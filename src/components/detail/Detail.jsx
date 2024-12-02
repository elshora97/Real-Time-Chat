import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img
          src="/avatar.png"
          alt="avatar"
        />
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img
              src="/arrowUp.png"
              alt="arrowUp"
            />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img
              src="/arrowUp.png"
              alt="arrowUp"
            />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img
              src="/arrowUp.png"
              alt="arrowUp"
            />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img
              src="/arrowDown.png"
              alt="arrowUp"
            />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="/avatar.png"
                  alt="avatar"
                />
                <span>photo220.1</span>
              </div>
              <img
                src="/download.png"
                alt="download"
                className="icon"
              />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img
              src="/arrowUp.png"
              alt="arrowUp"
            />
          </div>
        </div>

        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
