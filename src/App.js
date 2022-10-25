import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "PrivateRoute";
import PublicRoute from "PublicRoute";
import LinearProgress from "@mui/material/LinearProgress";
import { publicPaths, privatePaths } from "routes";

const AdminLoginPage = lazy(() => import("Pages/AdminLogin"));

const publicRoutes = [
  { path: publicPaths.admin, Component: <AdminLoginPage /> },
  { path: publicPaths.about, Component: <h1>1123</h1> },
  { path: publicPaths.form, Component: <h1>1123</h1> },
  { path: publicPaths.portfolio, Component: <h1>1123</h1> },
];

const privateRoutes = [
  { path: privatePaths.adminPanel, Component: <h1>Admin panel</h1> },
];

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        {privateRoutes?.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PrivateRoute>{route.Component}</PrivateRoute>}
          />
        ))}
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PublicRoute>{route.Component}</PublicRoute>}
          />
        ))}
        <Route path="*" element={<Navigate to={publicPaths.about} replace />} />
        <Route
          exact
          path="/"
          element={<Navigate to={publicPaths.about} replace />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
