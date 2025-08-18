import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Mainlayout/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[{
        path:"/",
        element:<Home></Home>
    }]
  },
]);

export default router;