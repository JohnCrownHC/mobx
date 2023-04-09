import React from 'react';
import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={'5'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'80vh'}
    >
      <Text fontSize={'2xl'} as={'b'}>
        Welcome to the app, please choose!
      </Text>
      <ButtonGroup>
        <Button colorScheme={'blue'} onClick={() => navigate('/todos')}>
          Todos
        </Button>
        <Button colorScheme={'teal'} onClick={() => navigate('/comments')}>
          Comments (async)
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default App;
