import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Mainlayout/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[{
        path:"/",
        element:<Home></Home>
    },{
      path:"/menu",
      element:<Menu></Menu>
    },{
      path:'/order/:catagory',
      element:<Order></Order>
    }]
  },
]);

export default router;