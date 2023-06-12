import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { eventsMocks } from "./eventsMocks";
import paths from "../routers/paths";

const apiUrl = import.meta.env.VITE_APP_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: tokenMock,
      })
    );
  }),

  rest.get(`${apiUrl}/events`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ events: eventsMocks }));
  }),

  rest.delete(
    `${apiUrl}${paths.events}/${eventsMocks[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "Event removed!" }));
    }
  ),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => res(ctx.status(401))),

  rest.delete(`$${apiUrl}${paths.events}/:id}`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
