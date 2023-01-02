import { useRef, useState } from "react";
import { Button, Card, Input, Space, Typography } from "antd";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const handleOnclickSubmit = () => {
    setTodoList([...todoList, todo]);
  };

  const handleOnclickDone = (index) => {
    setDoneList([...doneList, todoList[index]]);
  };

  return (
    <div className="grid justify-items-center text-center p-16">
      <Card className="m-7 w-[600px]  bg-violet-300">
        <Typography.Title>Todo List</Typography.Title>
        <div className="flex justify-center">
          <Input onChange={(e) => setTodo(e.target.value)} type="primary" />
          <Button
            onClick={handleOnclickSubmit}
            className="m-1 rounded-xl bg-blue-400 font-bold"
          >
            Submit
          </Button>
        </div>
      </Card>
      <Card className="w-[600px]  bg-violet-300">
        <Typography.Title>List</Typography.Title>
        {todoList.map((data, index) => (
          <div className="flex just">
            <div key={index}>{data}</div>
            <Button
              onClick={() => handleOnclickDone(index)}
              className="m-1 rounded-xl bg-blue-400 font-bold"
            >
              Done
            </Button>
          </div>
        ))}
      </Card>
      <Card className="m-7 w-[600px]  bg-violet-300">
        <Typography.Title>Success</Typography.Title>
        {doneList.map((data, index) => (
          <div className="flex just">
            <div key={index}>{data}</div>
            <Button
              onClick={() => handleOnclickDone(index)}
              className="m-1 rounded-xl bg-blue-400 font-bold"
            >
              Done
            </Button>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default App;
