import { useEffect, useState } from "react";

const List = ({ item, toDos, setToDos, toDo }) => {
  const changeTodo = (itemno) => {
    const copy = [...toDos];
    const target = copy.find((x) => x.no === itemno);
    target.title = currentTxt;
    setToDos(copy);
    setIsModify(false);
  };
  const [isModify, setIsModify] = useState(false);
  const [currentTxt, setCurrentTxt] = useState(item.title);
  const onChangeTxt = (e) => {
    setCurrentTxt(e.target.value);
  };
  const onRemove = (id) => {
    console.log(id);
    setToDos(toDos.filter((toDo) => toDo.no !== id));
  };
  useEffect(() => {
    setCurrentTxt(item.title);
  }, [isModify, item]);
  return (
    <li key={item.no}>
      {isModify ? (
        <>
          <input type="text" value={currentTxt} onChange={onChangeTxt} />
          <button
            onClick={() => {
              changeTodo(item.no);
            }}
          >
            수정완료
          </button>
          <button
            onClick={() => {
              setIsModify(false);
            }}
          >
            수정취소
          </button>
        </>
      ) : (
        <>
          {item.title}
          <button
            onClick={() => {
              setIsModify(true);
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              onRemove(item.no);
            }}
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default List;
