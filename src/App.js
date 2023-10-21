import React from 'react';
import './components/Header';
import Root from './components/Root';
import router from './Routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
