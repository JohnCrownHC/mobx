import React, { FC, useState } from 'react';
import todoSlice from '../../store/Todos';
import { observer } from 'mobx-react-lite';
import { Box, Button, Checkbox, Input, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

interface TodosProps {
  children?: React.ReactNode;
}

const Todos: FC<TodosProps> = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const navigate = useNavigate();

  return (
    <Box
      height={'80vh'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'5'}
    >
      <Button colorScheme={'facebook'} onClick={() => navigate(-1)}>
        GO BACK
      </Button>
      <Box display={'flex'} alignItems={'center'} gap={'3'}>
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          id={'addTodo'}
        />
        <Button
          colorScheme={'facebook'}
          isDisabled={newTodo.length === 0}
          onClick={() => {
            todoSlice.addTodo(uuidv4(), newTodo);
            setNewTodo('');
          }}
        >
          Add
        </Button>
      </Box>
      <Text fontSize={'3xl'}>Todos</Text>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'3'}
      >
        {todoSlice.todos.map((todo) => (
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={'3'}
            px={'10'}
            py={'2'}
            border={'1px solid'}
            borderRadius={'md'}
            key={todo.id}
          >
            <Text fontSize={'lg'}>{todo.title}</Text>
            <Checkbox
              isInvalid={!todo.completed}
              colorScheme={todo.completed ? 'green' : 'red'}
              checked={todo.completed}
              onChange={() => todoSlice.toggleTodo(todo.id)}
            />
            <Button
              size={'xs'}
              colorScheme={'red'}
              onClick={() => todoSlice.removeTodo(todo.id)}
            >
              X
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default observer(Todos);
