import { uid } from "../plugins/uidPlugin.ts";
import { replicateAsync } from "../plugins/replicatePlugin.ts";

export var AsyncTest = async (headers:Headers) =>{
  console.log("Within model -> ", headers);
  return Object({
    id: uid(),
    passed_headers: headers.get("asdasd"),
    waiting: await replicateAsync(3, "about.ts"),
  });
}