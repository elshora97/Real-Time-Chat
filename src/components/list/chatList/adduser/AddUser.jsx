import "./addUser.css";

const AddUser = ({ setAddMore }) => {
  return (
    <div className="addUser">
      <form>
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

      <div className="user">
        <div className="detail">
          <img
            src="/avatar.png"
            alt="avatar"
          />
          <span>John Doe</span>
        </div>
        <button>add user</button>
      </div>
    </div>
  );
};

export default AddUser;
