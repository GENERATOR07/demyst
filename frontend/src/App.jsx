import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Application from "./pages/Application";
import ApplicationResult from "./pages/ApplicationResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/application",
    element: <Application />,
  },
  {
    path: "/results",
    element: <ApplicationResult />,
  },
]);

export default router;
