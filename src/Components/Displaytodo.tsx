import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Todoitem from "./Todoitem";

import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeAlltodo } from "../ReduxToolkit/Slices/todoslice";
import ApidataTable from "./ApidataTable";

interface Todo {
  name: string;
  description: string;
}

const Displaytodo = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: any) => {
    return state.todos;
  });

  console.log(data);

  const [todos, setTodos] = useState<Todo[]>([]);

  const deletedatahandler = () => {
    //@ts-ignore
    dispatch(removeAlltodo());
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }} className="m-4">
        Todo List
      </h3>
      <Container>
        {data.map((todo: any, index: number) => (
          <Todoitem
            id={index}
            key={index}
            name={todo.name}
            description={todo.description}
            todos={todos}
          />
        ))}

        <button
          style={{ padding: "10px" }}
          className=" m-2 btn btn-danger"
          onClick={deletedatahandler}
        >
          <AiFillDelete /> Delete All Data
        </button>
        <ApidataTable/>
      </Container>
    </div>
  );
};

export default Displaytodo;
