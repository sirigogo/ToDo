import "./App.css";
import { useCallback, useMemo, useState } from "react";
import List from "./components/List";

function App() {
  const [toDo, setToDo] = useState([]);
  const [toDos, setToDos] = useState([
    { no: 3, title: "밥먹기" },
    { no: 2, title: "공부하기" },
    { no: 1, title: "리액트부시기" },
  ]);
  const plusTodo = useCallback(
    (e) => {
      setToDo(e.target.value);
    },
    [setToDo]
  );
  const onSubmitForm = useCallback(
    (e) => {
      console.log(toDos);
      console.log(toDo);
      e.preventDefault();
      console.log({
        no: toDos[0] ? toDos[0].no + 1 : 0,
        title: toDo,
      });
      setToDos((prev) => [
        {
          no: toDos[0] ? toDos[0].no + 1 : 0,
          title: toDo,
        },
        ...prev,
      ]);
      setToDo("");
      console.log(toDos);
    },
    [toDos, toDo]
  );
  const Header = useMemo(() => {
    return <h2>ToDo</h2>;
  }, []);
  return (
    <div className="App">
      {Header}
      <form onSubmit={onSubmitForm}>
        <input type="text" onChange={plusTodo} value={toDo} />
        <button>등록하기</button>
      </form>
      <ul>
        {toDos.map((item, idx) => (
          <List item={item} setToDos={setToDos} toDos={toDos} key={idx} />
        ))}
      </ul>
    </div>
  );
}

export default App;
