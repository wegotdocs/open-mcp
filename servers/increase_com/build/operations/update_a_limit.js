import { z } from "zod";
export const toolName = `update_a_limit`;
export const toolDescription = `Update a Limit`;
export const baseUrl = `https://api.increase.com`;
export const path = `/limits/{limit_id}`;
export const method = `patch`;
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
export const inputParams = z.object({ "path": z.object({ "limit_id": z.string().describe("The limit to update.") }).optional(), "body": z.object({ "status": z.enum(["inactive", "active"]).describe("The status to update the limit with.") }).optional() }).shape;
