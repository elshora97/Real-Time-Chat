import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";

const App = () => {
  return (
    <div className="container">
      <List />
      <Detail />
      <Chat />
    </div>
  );
};

export default App;
