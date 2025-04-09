import { z } from "zod";
export const inputParams = {
    "dev_resources": z.array(z.object({ "id": z.string().describe("Unique identifier of the dev resource"), "name": z.string().describe("The name of the dev resource.").optional(), "url": z.string().describe("The URL of the dev resource.").optional() })).describe("An array of dev resources.")
};
