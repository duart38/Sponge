import { v4 } from "https://deno.land/std/uuid/mod.ts";
/**
 * Generates a unique ID using (https://deno.land/std/uuid/mod.ts)
 */
export function uid() {
  return v4.generate();
}
