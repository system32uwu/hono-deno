import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { app } from "./api.ts";

Deno.test("Hello World", async () => {
  const res = await app.request("http://localhost:8000/");
  assertEquals(res.status, 200);
  assertEquals(await res.text(), "Hello! Hono!");
});
