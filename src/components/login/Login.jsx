import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);

  //cannot use as firebase/storage is no longer free
  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      if (!username || !email || !password) {
        toast.error("Please fill inputs");
        return;
      }
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        id: res.user.uid,
        username,
        email,
        blocked: [],
      });

      await setDoc(doc(db, "userChats", res.user.uid), {
        chats: [],
      });

      toast.success("Account Created");
      e.target.reset();
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      if (!email || !password) {
        toast.error("Please fill inputs");
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Loged in");
      e.target.reset();
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back,</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
          />
          <button disabled={loading}>Sign In</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img
              src={avatar.url || "/avatar.png"}
              alt="avatar"
            />
            Upload an Image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
          />
          <button disabled={loading}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
