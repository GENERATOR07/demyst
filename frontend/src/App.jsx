import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Application from "./pages/Application";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/application",
    element: <Application />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
