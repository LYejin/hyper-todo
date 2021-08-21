import React, { useReducer, useState } from "react";

import reducer, {
  initialState,
  ADD,
  DEL,
  COMPLETE,
  UNCOMPLETE,
} from "./reducer";

// useReducer는 component가 엄청난 수의 state를 가지고 있을 때 쓰인다.
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
    // 아무것도 안하겠다는 뜻
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="write to do"
          onChange={onChange}
        />
      </form>

      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </span>
            <span
              onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
            >
              ✅
            </span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((toDo) => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span
                  role="img"
                  aria-label=""
                  onClick={() => dispatch({ type: DEL, payload: toDo.id })}
                >
                  ❌
                </span>
                <span
                  role="img"
                  aria-label=""
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: toDo.id })
                  }
                >
                  🙅🏼‍♂️
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}

// dispatch function이 reducer를 실행하는 것이다.
// dispatch가 action과 함께 reducer function을 실행
// uuid : 엄청난 수 랜덤으로 생성

export default App;
