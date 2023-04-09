import { FC, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import commentsSlice from '../../store/Comments';

interface CommentsProps {
  children?: ReactNode;
}

const Comments: FC<CommentsProps> = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'5'}
    >
      <Button colorScheme={'facebook'} onClick={() => navigate(-1)}>
        GO BACK
      </Button>
      <Button
        isDisabled={Boolean(commentsSlice.comments.length)}
        colorScheme={'blackAlpha'}
        onClick={() => commentsSlice.getComments()}
      >
        Fetch comments
      </Button>
      <Box>
        {commentsSlice.comments.map((comment) => (
          <Box key={comment.id} border={'1px solid black'} padding={'3'}>
            <Box as={'b'}>{comment.email}</Box>
            <Box>{comment.body}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default observer(Comments);
