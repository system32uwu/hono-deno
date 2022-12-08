import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { app } from "./api.ts";

const main = async () => {
  await serve(app.fetch);
};

main();
