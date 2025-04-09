import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The ID of the issue type."),
    "avatarId": z.number().int().describe("The ID of an issue type avatar.").optional(),
    "description": z.string().describe("The description of the issue type.").optional(),
    "name": z.string().describe("The unique name for the issue type. The maximum length is 60 characters.").optional()
};
