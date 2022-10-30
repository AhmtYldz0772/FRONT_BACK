
import './App.css';
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import Password from "./pages/password/Password";
import Repass from "./pages/passwordNew/Repass";

import {createBrowserRouter,
RouterProvider,
Router,} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },

    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/password",
      element: <Password/>,
    },
    {
      path: "/repass",
      element: <Repass/>,
    },


  ]);
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
