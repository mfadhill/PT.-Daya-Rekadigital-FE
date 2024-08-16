import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Dashboard";
import Customer from "../pages/Customer";
import Dashboard from "../pages/Dashboard";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "customer",
        element: <Customer />,
      },
      // {
      //   path: "addcustomer",
      //   element: <AddCustomer />,
      // },
      // {
      //   path: "stock",
      //   element: <Stock />,
      // },
    ],
  },
];

export default routes;
