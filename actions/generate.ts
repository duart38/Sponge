import config from "../config.js";
import { modelsFolder } from "../CLA.ts";

/**
 * Generates a boilerplate model
 * @param name name of model
 */
function generateModel(name: string) {
  const varName: string = name.replace(".ts", "");
  const fileName: string = name.endsWith(".ts")
    ? `${modelsFolder()}/${name.trim()}`
    : `${modelsFolder()}/${name.trim()}.ts`;
  console.log(fileName);
  Deno.writeTextFileSync(
    fileName,
    `import { dummyTitle } from "../plugins/titlePlugin.ts";
export const ${varName} = { //TODO: implement this for proper data
    title: dummyTitle(10), // < plugins
    description: "Dummy data generated by an unknown request",
}
    `,
    { create: true },
  );
}

/**
 * Does some stuff when the model is not known
 * @param name 
 */
export function handleUnknownModel(name: string) {
  if (config.auto_create_models) {
    generateModel(name);
  }
}
