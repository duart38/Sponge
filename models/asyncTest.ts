import { uid } from "../plugins/uidPlugin.ts";
import { replicateAsync } from "../plugins/replicatePlugin.ts";

export var AsyncTest = async () =>
  Object({
    id: uid(),
    waiting: await replicateAsync(3, "about.ts"),
  });
