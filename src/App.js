import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "PrivateRoute";
import PublicRoute from "PublicRoute";
import LinearProgress from "@mui/material/LinearProgress";
import { publicPaths, privatePaths } from "routes";

const AdminLoginPage = lazy(() => import("Pages/AdminLogin"));
const AdminPanelPage = lazy(() => import("Pages/AdminPanel"));
const EntryPage = lazy(() => import("Pages/Start"));
const AboutPage = lazy(() => import("Pages/About"));
const PortfolioPage = lazy(() => import("Pages/PortfolioPage"));
const BeautyPage = lazy(() => import("Pages/BeautyPage"));
const Page404 = lazy(() => import("Pages/NotExistingPage"));
const RunwayPage = lazy(() => import("Pages/Runway"));
const ContactMePage = lazy(() => import("Pages/ContactMe"));

const publicRoutes = [
  { path: publicPaths.admin, Component: <AdminLoginPage /> },
  { path: publicPaths.about, Component: <AboutPage /> },
  { path: publicPaths.form, Component: <ContactMePage /> },
  { path: publicPaths.portfolio, Component: <PortfolioPage /> },
  { path: publicPaths.runway, Component: <RunwayPage /> },
  { path: publicPaths.beauty, Component: <BeautyPage /> },
  { path: publicPaths.startPage, Component: <EntryPage /> },
  {
    path: "*",
    Component: <Page404 />,
  },
];

const privateRoutes = [
  { path: privatePaths.adminPanel, Component: <AdminPanelPage /> },
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
      </Routes>
    </Suspense>
  );
}

export default App;
