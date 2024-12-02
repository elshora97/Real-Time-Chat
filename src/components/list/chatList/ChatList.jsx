import { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addMore, setAddMore] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img
            src="/search.png"
            alt="search"
          />
          <input
            type="text"
            placeholder="search"
          />
        </div>
        <img
          src={addMore ? "/minus.png" : "/plus.png"}
          alt="add"
          className="add"
          onClick={() => setAddMore((prev) => !prev)}
        />
      </div>

      <div className="item">
        <img
          src="/avatar.png"
          alt="avatar"
        />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img
          src="/avatar.png"
          alt="avatar"
        />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
