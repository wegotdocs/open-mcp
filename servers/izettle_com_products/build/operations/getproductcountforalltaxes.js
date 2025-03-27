import { z } from "zod";
export const toolName = `getproductcountforalltaxes`;
export const toolDescription = `Get all tax rates and a count of products associated with each`;
export const baseUrl = `https://products.izettle.com`;
export const path = `/v1/taxes/count`;
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
export const inputParams = z.object({}).shape;
