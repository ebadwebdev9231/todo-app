import {
  HStack,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";

interface Props {
  addTodo: (text: string) => void;
}

const TodoForm = ({ addTodo }: Props) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleTodo = () => {
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <HStack spacing={4} marginBottom={3}>
      <InputGroup>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <InputRightElement>
          <Icon
            as={IoIosAddCircleOutline}
            boxSize={6}
            color="cyan.400"
            _hover={{ color: "cyan.600", transition: ".5s" }}
            cursor="pointer"
            onClick={handleTodo}
          />
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
};

export default TodoForm;
