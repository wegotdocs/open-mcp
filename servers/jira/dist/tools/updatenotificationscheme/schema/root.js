import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The ID of the notification scheme."),
    "description": z.string().max(4000).describe("The description of the notification scheme.").optional(),
    "name": z.string().max(255).describe("The name of the notification scheme. Must be unique.").optional()
};
