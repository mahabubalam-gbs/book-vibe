import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import { ToastContainer } from 'react-toastify';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',
        loader: () => fetch('/booksData.json'),
        element: <BookDetail></BookDetail>
      },
      {
        path: '/listedBooks',
        loader: () => fetch('/booksData.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pagesToRead',
        loader: () => fetch('/booksData.json'),
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/signup',
        element: <SignUpForm></SignUpForm>
      },
      {
        path: '/signin',
        element: <SignInForm></SignInForm>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </HelmetProvider>
  </StrictMode>,
)
