import { jsonTree } from "https://deno.land/x/json_tree/mod.ts";
import { printMode } from "../CLA.ts";
export const printRequest = (data: any) => {
  switch (printMode()) {
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
