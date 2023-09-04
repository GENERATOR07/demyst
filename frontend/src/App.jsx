import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Application from "./pages/Application";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/application",
    element: <Application />,
  },
]);

export default router;
