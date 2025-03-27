import { z } from "zod";
export const toolName = `countorgausers`;
export const toolDescription = `Count the organization users using the provided filters`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/organizations/users/count`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "query": z.object({ "role": z.array(z.enum(["user", "teacher", "admin"])).describe("Filter users by role").optional(), "q": z.string().describe("The query to search").optional(), "group": z.array(z.string()).describe("Filter users by group").optional(), "noActiveLicense": z.boolean().describe("Filter users who don't have an active license").optional() }).optional() }).shape;
