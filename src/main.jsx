import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Route";
import BookProviderContext from "./routes/Context/BookProviderContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProviderContext>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </BookProviderContext>
  </StrictMode>,
);
