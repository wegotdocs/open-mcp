import { z } from "zod";
export const toolName = `getlibrary`;
export const toolDescription = `Retrieve the entire library`;
export const baseUrl = `https://products.izettle.com`;
export const path = `/organizations/{organizationUuid}/library`;
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
export const inputParams = z.object({ "path": z.object({ "organizationUuid": z.string().uuid() }).optional(), "query": z.object({ "eventLogUuid": z.string().uuid().optional(), "limit": z.number().int().gte(1).lte(500), "offset": z.string().optional(), "all": z.boolean().optional() }).optional() }).shape;
