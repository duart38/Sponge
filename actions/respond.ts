import {About} from "../models/about.ts";

/**
 * Constructs response data based on provided interface. 
 * Note that this method does not check if the model is available (see router.ts)
 * @param model interface to use to construct response data
 */
export function constructResponse(model:String) : object{
   console.log(About.body);
   console.log(About["body"]);
   return {};
}