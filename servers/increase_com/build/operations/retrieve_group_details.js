import { z } from "zod";
export const toolName = `retrieve_group_details`;
export const toolDescription = `Retrieve Group details`;
export const baseUrl = `https://api.increase.com`;
export const path = `/groups/current`;
export const method = `get`;
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
export const inputParams = z.object({}).shape;
