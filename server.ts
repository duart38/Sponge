import { serve, Server } from "https://deno.land/std/http/server.ts";
import { printRequest } from "./actions/print.ts";
import { warningLog, successLog } from "https://deno.land/x/colorlog/mod.ts";
import Router from "./router.ts";
import { constructResponse, constructHeaders } from "./actions/respond.ts";
import Watcher from "./fileWatcher.ts";
import { handleUnknownModel } from "./actions/generate.ts";
import { modelsFolder } from "./CLA.ts";

const port = Number.parseInt(Deno.env.get("PORT") ?? "8000") || 8000;
const server = serve({ port });
successLog(`[+] Server running on port: ${port}`);
const router = new Router();
const watcher = new Watcher(modelsFolder());

let handleRequest = async (req: any) => {
  const urlMethod = req.url.split("/")[req.url.split("/").length - 1] + ".ts"; // last piece of url (test/some/stuff) -> (stuff)
  if (router.contains(urlMethod)) {
    const data = JSON.stringify(await constructResponse(urlMethod, req.headers));
    successLog("[+] Responding with: ");
    printRequest(JSON.parse(data));
    req.respond({ body: data, headers: constructHeaders(req) });
  } else {
    warningLog(
      `[+] Printing unknown request (${urlMethod}) and responding with an empty object`,
    );
    handleUnknownModel(urlMethod);
    printRequest({
      Method: req.method,
      Headers: req.headers,
      Body: req.body,
      URL: req.url,
      Length: req.contentLength,
    });
    req.respond({ headers: constructHeaders(req) });
  }
};

for await (const req of server) {
  if (watcher.updated()) {
    // models directory has been changed
    router.reload(); // reload the models
    watcher.ack();
    handleRequest(req);
  } else {
    handleRequest(req);
  }
}
