
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/error/Error";
import HomePage from "../pages/HomPage/HomePage";
import Books from "../pages/Books/Books";
import BookDetails from "../pages/Book Details/BookDetails";
import PageToRead from "../pages/Page To Read/PageToRead";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/bookDetails/:BookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/page-to-read",
        Component: PageToRead
      },
    ],
    errorElement: <Error></Error>,
  },
]);