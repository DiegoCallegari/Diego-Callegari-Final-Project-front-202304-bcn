import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { eventsMocks } from "./eventsMocks";

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
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
