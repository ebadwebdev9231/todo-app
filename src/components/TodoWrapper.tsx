import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Box, Heading } from "@chakra-ui/react";

export interface Todo {
  id: number;
  text: string;
  // edit: boolean;
  completed: boolean;
}

const TodoWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      // edit: false,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };

  const onCompleted = (id: number) => {
    const completeTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(completeTodo);
  };

  const onEdit = (id: number, newEditText: string) => {
    const editTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newEditText } : todo
    );
    setTodos(editTodo);
    console.log(editTodo);
  };

  const onDelete = (id: number) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };

  return (
    <Box maxW="md" mx="auto" paddingX={2}>
      <Heading marginY={5} textAlign="center">
        Todo App
      </Heading>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onCompleted={onCompleted}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Box>
  );
};

export default TodoWrapper;
