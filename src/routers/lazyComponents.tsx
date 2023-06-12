import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyEventsListPage = lazy(
  () => import("../pages/EventsListPage/EventsListPage")
);

export const LazyEventNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);

export const LazyEventAddPage = lazy(
  () => import("../pages/EventAddPage/EventAddPage")
);
