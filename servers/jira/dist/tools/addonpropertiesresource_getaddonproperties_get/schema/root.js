import { z } from "zod";
export const inputParams = {
    "addonKey": z.string().describe("The key of the app, as defined in its descriptor.")
};
