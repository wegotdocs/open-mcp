import { z } from "zod";
export const inputParams = {
    "resourceType": z.enum(["organization", "project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
    "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
    "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(),
    "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page.").optional()
};
