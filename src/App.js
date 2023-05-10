import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const changeTodo = (e) => {
    setToDo(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    setToDo("");
  };
  return (
    <div className="App">
      <h2>ToDo</h2>
      <form onSubmit={onSubmitForm}>
        <input type="text" onChange={changeTodo} value={toDo} />
        <button>등록하기</button>
      </form>
    </div>
  );
}

export default App;
