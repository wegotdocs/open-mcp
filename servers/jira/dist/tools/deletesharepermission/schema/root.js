import { z } from "zod";
export const inputParams = {
    "id": z.number().int().describe("The ID of the filter."),
    "permissionId": z.number().int().describe("The ID of the share permission.")
};
