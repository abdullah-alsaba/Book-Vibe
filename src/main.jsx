import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Route";

import { ToastContainer } from "react-toastify";
import BookProviderContext from "./Context/BookProviderContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProviderContext>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </BookProviderContext>
  </StrictMode>,
);
