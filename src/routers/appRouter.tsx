import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import paths from "./paths";
import { Suspense } from "react";
import LazyLoginPage from "./lazyComponents";
import EventsListPage from "../pages/EventsListPage/EventsListPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: `${paths.login}`,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.home}`,
        element: <EventsListPage />,
      },
      {
        path: `*`,
        element: <p>Page not found</p>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
