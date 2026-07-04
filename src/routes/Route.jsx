
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/error/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {

      }
    ],
    errorElement: <Error></Error>
  },
  
]);