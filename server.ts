import { serve } from 'https://deno.land/std/http/server.ts'
import { printUnknownRequest } from './actions/print.ts';
import Router from "./router.ts";
const server = serve({ port: 8000 })

for await (const req of server) {
  req.respond({ body: 'Hello from your first Deno server' })
  printUnknownRequest({
    Method: req.method,
    Headers: req.headers,
    Body: req.body,
    URL: req.url,
    Length: req.contentLength
  });
  new Router();
}