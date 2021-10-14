import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './redux/actions/counter.actions.js';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import VisibilityFilter from './components/visibilityFilter';
import { Container, Heading, Button } from '@chakra-ui/react';


function App() {
  const dispatch = useDispatch()
  const counter  = useSelector(state => state.counter);
  return (
    <div className="App">
    
    <Container maxW="container.sm">
    <Heading my="4">Counter {counter}</Heading>
    <Button onClick={() => dispatch(increment())}>+</Button>
    <Button onClick={() => dispatch(decrement())}>-</Button>
      <Heading my="4">Todo List</Heading>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </Container>
    </div>
  );
}

export default App;
