import { useState } from "react";
import { db } from "../../../../lib/firebase";
import "./addUser.css";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { useUserStore } from "../../../../lib/userstore";

const AddUser = ({ setAddMore }) => {
  const [user, setUser] = useState(null);
  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data());
      } else {
        toast.error("No user found");
      }
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userChats");

    try {
      const newChatRef = doc(chatRef);
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await setDoc(
        doc(userChatsRef, user.id),
        {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            recieverId: currentUser.id,
            updatedAt: Date.now(),
          }),
        },
        { merge: true }
      );

      await setDoc(
        doc(userChatsRef, currentUser.id),
        {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            recieverId: user.id,
            updatedAt: Date.now(),
          }),
        },
        { merge: true }
      );
      setAddMore(false);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <span
          className="close"
          onClick={() => setAddMore(false)}>
          x
        </span>
        <input
          type="text"
          placeholder="Username"
          name="username"
        />
        <button>Search</button>
      </form>

      {user && (
        <div className="user">
          <div className="detail">
            <img
              src="/avatar.png"
              alt="avatar"
            />
            <span>{user.username}</span>
          </div>
          <button onClick={addUser}>add user</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
