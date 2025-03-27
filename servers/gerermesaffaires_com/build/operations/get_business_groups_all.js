import { z } from "zod";
export const toolName = `get_business_groups_all`;
export const toolDescription = `Returns list of groups custom for managers`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/business-groups/all`;
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
export const inputParams = z.object({ "query": z.object({ "Name": z.string().describe("Name of the group").optional() }).optional() }).shape;
