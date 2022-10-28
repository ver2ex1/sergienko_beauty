import { Navigate, useLocation } from "react-router-dom";
import { privatePaths } from "../routes";
import Layout from "components/Layout";

const PublicRoute = ({ children }) => {
  const { pathname } = useLocation();
  if (localStorage.getItem("access_token")) {
    return <Navigate to={privatePaths.adminPanel} replace />;
  }
  if (pathname === "/") {
    return children;
  }
  return <Layout>{children}</Layout>;
};

export default PublicRoute;
