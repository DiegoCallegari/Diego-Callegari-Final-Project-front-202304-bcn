import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { EventMockCardOne, eventsMocks } from "./eventsMocks";
import paths from "../routers/paths";

const apiUrl = import.meta.env.VITE_APP_URL;

export const handlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}${paths.events}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ events: eventsMocks }));
  }),

  rest.delete(
    `${apiUrl}${paths.events}/${eventsMocks[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "Event removed!" }));
    }
  ),

  rest.post(`${apiUrl}${paths.events}${paths.add}`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ event: EventMockCardOne }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}${paths.events}`, (_req, res, ctx) => {
    return res(ctx.status(500));
  }),
  rest.delete(`$${apiUrl}${paths.events}/:id}`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.post(`${apiUrl}${paths.events}${paths.add}`, (_req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
