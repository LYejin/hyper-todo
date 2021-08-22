import React from "react";
import Add from "./Add";
import List from "./List";
import { useState } from "../context";
import ToDo from "./ToDo";

function App() {
  const { toDos, completed } = useState();
  return (
    <>
      <Add />
      <List name={"To Do"}>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
}

export default App;
