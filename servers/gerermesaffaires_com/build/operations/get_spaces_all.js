import { z } from "zod";
export const toolName = `get_spaces_all`;
export const toolDescription = `Returns all spaces`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/all`;
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
export const inputParams = z.object({ "query": z.object({ "Name": z.string().describe("Name of the space").optional(), "Type": z.enum(["private", "enterprise", "company", "association"]).describe("Type of the space").optional() }).optional() }).shape;
