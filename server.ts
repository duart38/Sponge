import { serve } from "https://deno.land/std/http/server.ts";
import { printUnknownRequest } from "./actions/print.ts";
import { warningLog } from "https://deno.land/x/colorlog/mod.ts";
import Router from "./router.ts";
import { constructResponse } from "./actions/respond.ts";
import Watcher from "./fileWatcher.ts";

const server = serve({ port: 8000 });
const router = new Router();
const watcher = new Watcher("./models");

for await (const req of server) {
  if (watcher.updated()) {
    // models directory has been changed
    router.reload(); // reload the models
    watcher.ack(); // acknowledge the changes
  }
  const urlMethod = req.url.split("/")[req.url.split("/").length - 1] + ".ts"; // last piece of url (test/some/stuff) -> (stuff)
  if (router.contains(urlMethod)) {
    req.respond({ body: JSON.stringify(await constructResponse(urlMethod)) });
  } else {
    warningLog(
      `[+] Printing unknown request (${urlMethod}) and responding with an empty object`
    );
    printUnknownRequest({
      Method: req.method,
      Headers: req.headers,
      Body: req.body,
      URL: req.url,
      Length: req.contentLength,
    });
    req.respond({});
  }
}
