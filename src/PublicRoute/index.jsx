import { Navigate } from "react-router-dom";
import { privatePaths } from "../routes";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("access_token")) {
    return <Navigate to={privatePaths.adminPanel} replace />;
  }

  return children;
};

export default PublicRoute;
