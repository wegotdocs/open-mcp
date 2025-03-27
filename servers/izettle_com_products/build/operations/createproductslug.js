import { z } from "zod";
export const toolName = `createproductslug`;
export const toolDescription = `Create a product identifier`;
export const baseUrl = `https://products.izettle.com`;
export const path = `/organizations/{organizationUuid}/products/online/slug`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "organizationUuid": z.string().uuid() }).optional(), "body": z.object({ "productName": z.string().min(1).max(256) }).optional() }).shape;
