import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import paths from "./paths";
import { Suspense } from "react";
import {
  LazyEventNotFoundPage,
  LazyEventsListPage,
  LazyLoginPage,
} from "./lazyComponents";
import EventAddPage from "../pages/EventCreatePage/EventAddPage";

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
        element: (
          <Suspense>
            <LazyEventsListPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.add}`,
        element: <EventAddPage />,
      },
      {
        path: `*`,
        element: (
          <Suspense>
            <LazyEventNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
