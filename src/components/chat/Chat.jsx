import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img
            src="/avatar.png"
            alt=""
          />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img
            src="/phone.png"
            alt=""
          />
          <img
            src="/video.png"
            alt=""
          />
          <img
            src="/info.png"
            alt=""
          />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img
            src="/avatar.png"
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
            src="/avatar.png"
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
            src="/avatar.png"
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
            src="/avatar.png"
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
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img
            src="/img.png"
            alt="img"
          />
          <img
            src="/camera.png"
            alt="camera"
          />
          <img
            src="/mic.png"
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
            src="/emoji.png"
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
