import { z } from "zod";
export const toolName = `cdn_get_endpoint`;
export const toolDescription = `Retrieve an Existing CDN Endpoint`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/cdn/endpoints/{cdn_id}`;
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
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "cdn_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "cdn_id": z.string().uuid().describe("A unique identifier for a CDN endpoint.")
};
