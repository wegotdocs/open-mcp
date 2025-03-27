import { z } from "zod";
export const toolName = `getuser`;
export const toolDescription = `Get a user`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/{id}`;
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
export const inputParams = z.object({ "query": z.object({ "withStats": z.boolean().describe("include statistics about the user (only available as a moderator/admin)").optional() }).optional() }).shape;
