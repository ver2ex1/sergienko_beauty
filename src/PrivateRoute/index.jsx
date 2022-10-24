import { Navigate } from "react-router-dom";
import { publicPaths } from "../routes";
import Box from "@mui/material/Box";

const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem("access_token")) {
    return <Navigate to={publicPaths.about} replace />;
  }

  return <Box>{children}</Box>;
};

export default PrivateRoute;
