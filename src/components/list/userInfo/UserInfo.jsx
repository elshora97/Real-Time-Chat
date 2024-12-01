import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img
          src="/public/avatar.png"
          alt="avatar"
        />
        <h2>john doe</h2>
      </div>
      <div className="icons">
        <img
          src="/public/more.png"
          alt="more"
        />
        <img
          src="/public/video.png"
          alt="video"
        />
        <img
          src="/public/edit.png"
          alt="edit"
        />
      </div>
    </div>
  );
};

export default UserInfo;
