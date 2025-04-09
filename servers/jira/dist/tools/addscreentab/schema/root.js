import { z } from "zod";
export const inputParams = {
    "screenId": z.number().int().describe("The ID of the screen."),
    "id": z.number().int().describe("The ID of the screen tab.").readonly().optional(),
    "name": z.string().describe("The name of the screen tab. The maximum length is 255 characters.")
};
