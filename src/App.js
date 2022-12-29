import { useState } from "react";
import { Button, Card, Input, Typography } from "antd";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  
  return (
    <div className="grid justify-items-center text-center p-16">
      <Card className="m-7 w-[600px]  bg-violet-300">
        <Typography.Title>Todo List</Typography.Title>
        <div className="flex justify-center">
          <Input type="primary" />
          <Button className="m-1 rounded-xl bg-blue-400 font-bold"></Button>
        </div>
      </Card>
      <Card className="w-[600px]  bg-violet-300 ">
        <Typography.Title>List</Typography.Title>
      </Card>
      <Card className="m-7 w-[600px]  bg-violet-300">
        <Typography.Title>Success</Typography.Title>
      </Card>
    </div>
  );
}

export default App;
