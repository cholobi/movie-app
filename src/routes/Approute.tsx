import type { FC } from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Details from "../pages/Details";
import Login from "../pages/Auth/Login";
import Callback from "../components/Callback";
import Dashboard from "../pages/Dashboard";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import ProtectedRoute from "../components/Protected";

interface ApprouteProps {}

const Approute: FC<ApprouteProps> = ({}): React.ReactElement | null => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
    {
      path: "details/:id",
      element: <Details />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/callback",
      element: <Callback />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return routes;
};
export default Approute;