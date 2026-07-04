
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/error/Error";
import HomePage from "../pages/HomPage/HomePage";
import Books from "../pages/Books/Books";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage
      },
      {
        path: "/books",
        Component: Books
      }
    ],
    errorElement: <Error></Error>
  },
  
]);