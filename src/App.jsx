import { useReducer, useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";

import { Trash2 } from "lucide-react";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() !== "") {
      dispatch({ type: "ADD", text });
      setText("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex gap-2 mb-4">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>
      <div className="space-y-2">
        {todos.map((todo) => (
          <Card key={todo.id} className="flex justify-between p-2">
            <CardContent>{todo.text}</CardContent>
            <Button variant="ghost" onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
              <Trash2 size={18} />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
