import { z } from "zod";
export const inputParams = {
    "resourceType": z.enum(["organization", "project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
    "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
    "sanityUserId": z.string().describe("The User ID"),
    "includeImpliedRoles": z.boolean().describe("Whether to include implied roles in the response.").optional()
};
