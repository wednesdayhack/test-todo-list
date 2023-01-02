import { useRef, useState } from "react";
import { Button, Card, Input, Space, Typography } from "antd";

function App() {
  const [todo, setTodo] = useState("");
  let [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  console.log(todoList);
  const handleOnclickSubmit = () => {
    if (todo) {
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, name: todo, edit: false },
      ]);
      setTodo("");
    }
  };

  const handleOnclickDone = (id) => {
    const CompleteResult = todoList.filter((name) => name.id === id);
    setDoneList([...doneList, ...CompleteResult]);
    const result = todoList.filter((name) => name.id !== id);
    setTodoList(result);
  };
  const handleOnclickEdit = (index) => {
    let items = [...todoList];
    let item = { ...items[index] };
    item.edit = true;
    items[index] = item;
    setTodoList(items);
  };

  const handleOnclickUpdated = (index) => {
    let items = [...todoList];
    let item = { ...items[index] };
    item.edit = false;
    items[index] = item;
    setTodoList(items);
  };

  const handleOnChange = (value, index) => {
    let items = [...todoList];
    let item = { ...items[index] };
    item.name = value;
    items[index] = item;
    setTodoList(items);
  };

  return (
    <div className="grid justify-items-center text-center p-16">
      <Card className="m-7 w-[600px]  bg-violet-300">
        <Typography.Title>Todo List</Typography.Title>
        <div className="flex justify-center">
          <Input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="primary"
          />
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
        {todoList?.map((data, index) => (
          <div key={data.id} className="flex justify-between items-center">
            {data.edit ? (
              <>
                <Input
                  value={data.name}
                  onChange={(e) => handleOnChange(e.target.value, index)}
                  type="primary"
                />
                <Button
                  onClick={() => handleOnclickUpdated(index)}
                  className="m-1 rounded-xl bg-blue-400 font-bold"
                >
                  Update
                </Button>
              </>
            ) : (
              <>
                <div className="w-[200px]">{data.name}</div>
                <div>
                  <Button
                    onClick={() => handleOnclickDone(data.id)}
                    className="m-1 rounded-xl bg-blue-400 font-bold"
                  >
                    Done
                  </Button>
                  <Button
                    onClick={() => handleOnclickEdit(index)}
                    className="m-1 rounded-xl bg-blue-400 font-bold"
                  >
                    Edit
                  </Button>
                </div>
              </>
            )}
          </div>
        ))}
      </Card>

      <Card className="m-7 w-[600px]  bg-violet-300">
        <Typography.Title>Success</Typography.Title>
        {doneList.map((data) => (
          <div key={data.id} className="flex just">
            <div>{data.name}</div>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default App;
