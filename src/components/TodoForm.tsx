import {
  HStack,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { BsPlusCircleFill } from "react-icons/bs";
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
      <InputGroup size="lg">
        <Input
          value={newTodo}
          variant="filled"
          borderWidth="1px"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <InputRightElement>
          <Icon
            as={BsPlusCircleFill}
            boxSize={6}
            color="teal.400"
            _hover={{ color: "teal.500", transition: ".5s" }}
            cursor="pointer"
            onClick={handleTodo}
          />
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
};

export default TodoForm;
