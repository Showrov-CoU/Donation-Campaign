import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import Layout from "../LayOut/Layout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Selected from "../Selected/Selected";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/category/:id",
        element: <Selected></Selected>,
        loader: () => fetch("/category.json"),
      },
    ],
  },
]);

export default Router;
