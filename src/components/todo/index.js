import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/toDo.actions.js";
import { Box, Checkbox, Text } from '@chakra-ui/react'

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);

  const handleCheked = () => dispatch(toggleTodo(todo.id));

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
    <Box mb={1} bgColor="lightcoral" p={2}>
      <Checkbox onChange={handleCheked} colorScheme="teal" isChecked={cheked}>
        <Text as={todo.completed && "del"}>{todo.content}</Text>
      </Checkbox>
    </Box>
  );
};

export default Todo;
