import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The ID of the issue security scheme."),
    "description": z.string().max(255).describe("The description of the security scheme scheme.").optional(),
    "name": z.string().max(60).describe("The name of the security scheme scheme. Must be unique.").optional()
};
