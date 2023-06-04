import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
export const LazyEventsListPage = lazy(
  () => import("../pages/EventsListPage/EventsListPage")
);
