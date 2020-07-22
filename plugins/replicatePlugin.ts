import { constructResponse } from "../actions/respond.ts";

/**
 * Replicates the given model 'n' times and adds it to an array that gets returned
 * @param times the amount of times you want this object replicated
 * @param model the model name to replicate WITH the extension
 */
export function replicate(times: number, data: object): Array<object> {
  let items: any = [];
  for (var i = 0; i < times; i++) {
    items.push(data);
  }
  return items;
}

// TODO: add load method to load a single different model in another one.
