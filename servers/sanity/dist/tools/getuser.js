import { z } from "zod";
export const toolName = `getuser`;
export const toolDescription = `Get user and roles.`;
export const baseUrl = `https://api.sanity.io`;
export const path = `/vX/access/{resourceType}/{resourceId}/users/{sanityUserId}`;
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
        "includeImpliedRoles"
    ],
    "header": [],
    "path": [
        "resourceType",
        "resourceId",
        "sanityUserId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "resourceType": z.enum(["organization", "project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"), "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."), "sanityUserId": z.string().describe("The User ID"), "includeImpliedRoles": z.boolean().describe("Whether to include implied roles in the response.") }).shape;
