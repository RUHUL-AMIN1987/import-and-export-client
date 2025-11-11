import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import router from "./Router/Router";
import "./index.css"
import AuthProvider from "./Context/AuthProvider";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider><RouterProvider router={router} /></AuthProvider>
);