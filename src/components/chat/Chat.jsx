import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img
            src="/public/avatar.png"
            alt=""
          />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img
            src="/public/phone.png"
            alt=""
          />
          <img
            src="/public/video.png"
            alt=""
          />
          <img
            src="/public/info.png"
            alt=""
          />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img
            src="/public/avatar.png"
            alt="avatar"
          />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              cupiditate.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              cupiditate.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img
            src="/public/avatar.png"
            alt="avatar"
          />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              cupiditate.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              cupiditate.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img
            src="/public/avatar.png"
            alt="avatar"
          />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              cupiditate.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img
            src="/public/img.png"
            alt="img"
          />
          <img
            src="/public/camera.png"
            alt="camera"
          />
          <img
            src="/public/mic.png"
            alt="mic"
          />
        </div>

        <input
          type="text"
          placeholder="type your message..."
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />

        <div className="emoji">
          <img
            src="/public/emoji.png"
            alt="emoji"
            onClick={() => setOpenEmoji((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker
              open={openEmoji}
              onEmojiClick={handleEmoji}
            />
          </div>
        </div>
        <button className="sendBtn">send</button>
      </div>
    </div>
  );
};

export default Chat;
