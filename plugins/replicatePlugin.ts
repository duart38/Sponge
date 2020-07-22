import { constructResponse } from "../actions/respond.ts";

/**
 * Replicates the given model 'n' times and adds it to an array that gets returned
 * Note that the data that is replicated does not re-evaluate the object thus making the values static and the same across iterations
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

/**
 * Replicates the given model 'n' times and adds it to an array that gets returned
 * This is the asynchronous way of replicating and requires your model to be wrapped in an async function
 * @example export var Test = async ()=> Object({ ... }); // object constructor here was used for simplicity
 * @param times 
 * @param data 
 */
export async function replicateAsync(
  times: number,
  modelName: string,
): Promise<Array<object>> {
  let items: any = [];
  for (var i = 0; i < times; i++) {
    items.push(await constructResponse(modelName));
  }
  return items;
}

// TODO: add load method to load a single different model in another one.
