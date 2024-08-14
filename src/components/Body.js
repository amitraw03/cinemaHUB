
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';

/////////////////////------------------- PARENT COMPONENT -----------------------///////////////////

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login/>
        },
        {
            path:'/browse',
            element: <Browse/>
        },
    ]);

  return (
    <div>
          <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;