import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./adduser/AddUser";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useUserStore } from "../../../lib/userstore";
import { useChatStore } from "../../../lib/chatstore";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMore, setAddMore] = useState(false);
  const { currentUser } = useUserStore();
  const { chatId, changChat } = useChatStore();

  const handleSelect = async (chat) => {
    changChat(chat.chatId, chat.user);
  };

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userChats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.recieverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();
          return { ...item, user };
        });

        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        console.log(chatData);
      }
    );
    return () => {
      unSub();
    };
  }, [currentUser.id]);

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
      {chats.map((chat) => {
        return (
          <div
            className="item"
            key={chat.chatId}
            onClick={() => handleSelect(chat)}>
            <img
              src="/avatar.png"
              alt="avatar"
            />
            <div className="texts">
              <span>{chat.user.username}</span>
              <p>{chat.lastMessage}</p>
            </div>
          </div>
        );
      })}

      {addMore && <AddUser setAddMore={setAddMore} />}
    </div>
  );
};

export default ChatList;
