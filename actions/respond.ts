/**
 * Constructs response data based on provided interface.
 * Note that this method does not check if the model is available (see router.ts)
 * @param model interface to use to construct response data
 */
export async function constructResponse(model: string): Promise<Object> {
  let m = await import(`../models/${model}?${Math.random()}.ts`);
  if (typeof m[Object.keys(m)[0]] == "function") {
    return await m[Object.keys(m)[0]]();
  } else {
    return m[Object.keys(m)[0]];
  }
}
export function constructHeaders(req: any) {
  let headers = req.headers;
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Headers", "*");
  return headers;
}
