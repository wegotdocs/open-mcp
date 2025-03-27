import { z } from "zod";
export const toolName = `settaxationmode`;
export const toolDescription = `Update the organization tax settings`;
export const baseUrl = `https://products.izettle.com`;
export const path = `/v1/taxes/settings`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "taxationMode": z.enum(["EXCLUSIVE", "INCLUSIVE"]) }).optional() }).shape;
