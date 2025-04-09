import { z } from "zod";
export const inputParams = {
    "screenId": z.number().int().describe("The ID of the screen."),
    "tabId": z.number().int().describe("The ID of the screen tab."),
    "fieldId": z.string().describe("The ID of the field to add.")
};
