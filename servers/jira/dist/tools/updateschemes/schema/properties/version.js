import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The version UUID.").optional(),
    "versionNumber": z.number().int().describe("The version number.").optional()
};
