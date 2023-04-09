import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Todos from './components/Todos/Todos';
import Comments from './components/Comments/Comments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
  {
    path: '/comments',
    element: <Comments />,
  },
]);

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '',
      },
    }),
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
