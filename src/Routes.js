import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'home',
        element: <Home></Home>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'books',
        element: <Books />,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
    ],
  },
]);

export default router;
