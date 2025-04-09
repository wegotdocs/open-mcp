import { z } from "zod";
export const inputParams = {
    "propertyKey": z.string().describe("The key of the property.")
};
