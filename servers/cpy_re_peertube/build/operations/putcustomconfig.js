import { z } from "zod";
export const toolName = `putcustomconfig`;
export const toolDescription = `Set instance runtime configuration`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/config/custom`;
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
export const inputParams = z.object({}).shape;
