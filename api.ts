import { logger } from "https://deno.land/x/hono@v2.5.9/middleware.ts";
import { Hono } from "https://deno.land/x/hono@v2.5.9/mod.ts";

const app = new Hono();

app.use("*", logger());

app.get("/", (c) => c.text("Hello! Hono! From preview!"));

app.get("/env/:var", (c) => {
  const key = c.req.param("var").toUpperCase();
  const value = Deno.env.get(key) || null;

  return c.json({ [key]: value });
});

export { app };
