import { z } from "zod";
export const inputParams = {
    "fieldId": z.string().describe("The ID of the field.")
};
