import { z } from "zod";
export const toolName = `getteammembers`;
export const toolDescription = `List team members`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v3/teams/{teamId}/members`;
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
        "limit",
        "since",
        "until",
        "search",
        "role",
        "excludeProject",
        "eligibleMembersForProjectId"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "limit": z.number().gte(1).describe("Limit how many teams should be returned").optional(),
    "since": z.number().describe("Timestamp in milliseconds to only include members added since then.").optional(),
    "until": z.number().describe("Timestamp in milliseconds to only include members added until then.").optional(),
    "search": z.string().describe("Search team members by their name, username, and email.").optional(),
    "role": z.enum(["OWNER", "MEMBER", "DEVELOPER", "VIEWER", "BILLING", "CONTRIBUTOR"]).describe("Only return members with the specified team role.").optional(),
    "excludeProject": z.string().describe("Exclude members who belong to the specified project.").optional(),
    "eligibleMembersForProjectId": z.string().describe("Include team members who are eligible to be members of the specified project.").optional()
};
