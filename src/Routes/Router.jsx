import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Mainlayout/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Registration from "../Accounts/Registration";
import Login from "../Accounts/Login";
import Privateroute from "../Private routes/Privateroute";
import Dashboard from "../Mainlayout/Dashboard";
import Mycarts from "../Pages/Mycarts/Mycarts";
import Allusers from "../Adminroutes/Allusers/Allusers";
import Additems from "../Adminroutes/Additems/Additems";
import Adminroute from "../Private routes/Adminroute";
import Manageitems from "../Adminroutes/ManageItems/Manageitems";
import Updateitem from "../Adminroutes/Updateitem/Updateitem";
import Payment from "../Userroutes/Payment/Payment";
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
    },
    {
      path:'/register',
      element:<Registration></Registration>
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]
  },
  {
    path:'/dashboard',
    element:<Privateroute><Dashboard></Dashboard></Privateroute> ,
    children:[{
         path:'mycarts',
         element:<Mycarts></Mycarts>
    },
    {
      path:"payment",
      element:<Payment></Payment>
    },
    //admin routes
  {
  path:'allusers',
  element:<Allusers></Allusers>
  },
{
  path:'additem',
  element:<Adminroute><Additems></Additems></Adminroute> 
},
{
  path:'manageitem',
  element:<Adminroute><Manageitems></Manageitems></Adminroute>
},
{
  path:'updateitem/:id',
  element:<Adminroute><Updateitem></Updateitem></Adminroute>,
  loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
}]
  }
]);

export default router;