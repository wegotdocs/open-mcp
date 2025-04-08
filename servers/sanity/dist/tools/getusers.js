import { z } from "zod";
export const toolName = `getusers`;
export const toolDescription = `List all users of a resource and their assigned roles.`;
export const baseUrl = `https://api.sanity.io`;
export const path = `/vX/access/{resourceType}/{resourceId}/users`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [
        "nextCursor",
        "limit",
        "includeImpliedRoles"
    ],
    "header": [],
    "path": [
        "resourceType",
        "resourceId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "resourceType": z.enum(["organization", "project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
    "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
    "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(),
    "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page.").optional(),
    "includeImpliedRoles": z.boolean().describe("Whether to include implied roles in the response.").optional()
};
