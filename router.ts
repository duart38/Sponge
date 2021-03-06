import { modelsFolder } from "./CLA.ts";

export default class Router {
  models: Array<String> = [];

  constructor() {
    this.populateModels();
  }

  public reload() {
    this.models = [];
    this.populateModels();
  }

  public contains(text: String): boolean {
    return this.models.includes(text);
  }

  private async populateModels() {
    for (const dirEntry of Deno.readDirSync(modelsFolder())) {
      console.log(dirEntry.name);
      // const data = await Deno.readTextFile("hello.txt");
      // console.log(data);
      this.models.push(dirEntry.name);
    }
  }
}
