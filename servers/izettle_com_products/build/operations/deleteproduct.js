import { z } from "zod";
export const toolName = `deleteproduct`;
export const toolDescription = `Delete a single product`;
export const baseUrl = `https://products.izettle.com`;
export const path = `/organizations/{organizationUuid}/products/{productUuid}`;
export const method = `delete`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "organizationUuid": z.string().uuid(), "productUuid": z.string().uuid() }).optional() }).shape;
