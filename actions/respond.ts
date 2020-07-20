/**
 * Constructs response data based on provided interface.
 * Note that this method does not check if the model is available (see router.ts)
 * @param model interface to use to construct response data
 */
export async function constructResponse(model: string): Promise<Object> {
    let m  = await import(`../models/${model}?${Math.random()}.ts`);
    return m[Object.keys(m)[0]];
}
