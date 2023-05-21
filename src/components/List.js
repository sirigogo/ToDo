import { useCallback, useEffect, useMemo, useState } from "react";

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
  const onChangeTxt = useCallback(
    (e) => {
      setCurrentTxt(e.target.value);
    },
    [setCurrentTxt]
  );
  const onRemove = useCallback(
    (id) => {
      setToDos(toDos.filter((toDo) => toDo.no !== id));
    },
    [toDos, setToDos]
  );
  useEffect(() => {
    setCurrentTxt(item.title);
  }, [isModify, item]);
  const [topValue, setTopValue] = useState(10);
  const liStyle = useMemo(() => {
    return { marginTop: `${topValue}px` };
  }, [topValue]);
  return (
    <li key={item.no} style={liStyle}>
      <button
        onClick={() => {
          setTopValue((prev) => prev + 10);
        }}
      >
        탑벨류 변경
      </button>
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
