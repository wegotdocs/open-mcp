import { z } from "zod";
export const toolName = `addscoretocollection`;
export const toolDescription = `Add a score to the collection`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/collections/{collection}/scores/{score}`;
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
