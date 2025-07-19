import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import Tool from "../pages/Tool";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/learn", element: <Learn /> },
  { path: "/tool", element: <Tool /> },
]);
