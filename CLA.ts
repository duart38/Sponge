import config from "./config.js";
import { parse } from "https://deno.land/std/flags/mod.ts";
const args: any = parse(Deno.args);

/**
 * Gets the model folder from the command line or defaults to the one specified in the config.js file
 */
export function modelsFolder(): string {
  if ("m" in args) {
    return args["m"].endsWith("/")
      ? replaceAt(args["m"], args["m"].length - 1, "")
      : args["m"];
  }
  return config.models_folder;
}

/**
 * The mode to print data
 */
export function printMode(): string {
  return "p" in args ? args["p"] : config.print_mode;
}

/**
 * Name says it all..
 * Credits to : https://gist.github.com/efenacigiray/9367920
 * @author https://github.com/efenacigiray
 * @param string 
 * @param index 
 * @param replace 
 */
function replaceAt(string: string, index: number, replace: string): string {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
