import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCheckboxOutline } from "react-icons/io";
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
              p="2"
            >
              <Box>
                <Checkbox
                  defaultChecked={todo.completed}
                  onChange={() => onCompleted(todo.id)}
                >
                  <Text as={todo.completed ? "del" : "span"}>{todo.text}</Text>
                </Checkbox>
              </Box>
              <HStack alignItems={"center"}>
                <Icon
                  as={FaRegEdit}
                  color="gray.400"
                  _hover={{ color: "gray.500", transition: ".5s" }}
                  role="button"
                  onClick={() => {
                    handleEditStart(todo.id, todo.text),
                      console.log(todo.id, todo.text, editValue);
                  }}
                />
                <Icon
                  as={RiDeleteBin6Line}
                  color="gray.400"
                  _hover={{ color: "gray.500", transition: ".5s" }}
                  role="button"
                  onClick={() => onDelete(todo.id)}
                />
              </HStack>
            </Flex>
          ) : (
            <HStack key={todo.id}>
              <InputGroup>
                <Input
                  autoFocus
                  value={editValue}
                  onChange={(e) => {
                    setEditValue(e.target.value);
                  }}
                />
                <InputRightElement>
                  <Icon
                    as={IoMdCheckboxOutline}
                    color="gray.400"
                    _hover={{ color: "gray.500", transition: ".5s" }}
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
