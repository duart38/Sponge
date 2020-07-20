import { jsonTree } from "https://deno.land/x/json_tree/mod.ts";
import config from "../config.js";
export const printUnknownRequest = (data: any) => {
  switch (config.print_mode) {
    case "json":
      console.log(data);
      break;
    case "tree":
      console.log(jsonTree({ data }, true));
      break;
    default:
      console.log(data);
  }
};
