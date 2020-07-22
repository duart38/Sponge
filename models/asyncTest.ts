import { uid } from "../plugins/uidPlugin.ts";
import { replicateAsync } from "../plugins/replicatePlugin.ts";

export var AsyncTest = async (headers: Headers, params: object) =>
  Object({
    id: uid(),
    passed_headers: headers.get("asdasd"),
    passed_params: params,
    waiting: await replicateAsync(3, "about.ts"),
  });
