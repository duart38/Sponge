import { dummyTitle } from "../plugins/titlePlugin.ts";
import { dummyInteger, dummyMoney } from "../plugins/numberPlugin.ts";

export const About = {
    title: dummyTitle(10), // < plugins
    description: "static stuff",
    some_number: dummyInteger(1, 20),
    price: dummyMoney(5000)
}
