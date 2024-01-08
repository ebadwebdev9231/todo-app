import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Todo } from "./TodoWrapper";
import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newEditText: string) => void;
  onCompleted: (id: number) => void;
}

const TodoList = ({ todos, onDelete, onEdit, onCompleted }: Props) => {
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleEditStart = (id: number, text: string) => {
    setEditId(id);
    setEditValue(text);
    console.log(editValue);
  };

  const handleEditSave = (id: number) => {
    onEdit(id, editValue);
    setEditId(null);
    setEditValue("");
  };

  return (
    <>
      {todos.map((todo) => (
        <Box>
          {editId !== todo.id ? (
            <Flex
              key={todo.id}
              minWidth="max-content"
              alignItems="center"
              justifyContent="space-between"
              gap="2"
              borderWidth="1px"
              p="3"
            >
              <Box>
                <Checkbox
                  defaultChecked={todo.completed}
                  onChange={() => onCompleted(todo.id)}
                >
                  <Text
                    as={todo.completed ? "del" : "span"}
                    fontSize="lg"
                    marginLeft="1"
                  >
                    {todo.text}
                  </Text>
                </Checkbox>
              </Box>
              <HStack alignItems={"center"}>
                <Icon
                  as={AiOutlineEdit}
                  boxSize="23px"
                  color="blue.400"
                  _hover={{ color: "blue.500", transition: ".5s" }}
                  role="button"
                  onClick={() => {
                    handleEditStart(todo.id, todo.text),
                      console.log(todo.id, todo.text, editValue);
                  }}
                />
                <Icon
                  as={AiOutlineDelete}
                  boxSize="23px"
                  color="red.400"
                  _hover={{ color: "red.500", transition: ".5s" }}
                  role="button"
                  onClick={() => onDelete(todo.id)}
                />
              </HStack>
            </Flex>
          ) : (
            <HStack key={todo.id}>
              <InputGroup size="lg">
                <Input
                  autoFocus
                  value={editValue}
                  onChange={(e) => {
                    setEditValue(e.target.value);
                  }}
                />
                <InputRightElement>
                  <Icon
                    as={FiCheckCircle}
                    boxSize="23px"
                    color="green.400"
                    _hover={{ color: "green.500", transition: ".5s" }}
                    role="button"
                    onClick={() => handleEditSave(todo.id)}
                  />
                </InputRightElement>
              </InputGroup>
            </HStack>
          )}
        </Box>
      ))}
    </>
  );
};

export default TodoList;
