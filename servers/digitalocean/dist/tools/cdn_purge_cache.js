import { z } from "zod";
export const toolName = `cdn_purge_cache`;
export const toolDescription = `Purge the Cache for an Existing CDN Endpoint`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/cdn/endpoints/{cdn_id}/cache`;
export const method = `delete`;
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
    "body": [
        "files"
    ]
};
export const flatMap = {};
export const inputParams = {
    "cdn_id": z.string().uuid().describe("A unique identifier for a CDN endpoint."),
    "files": z.array(z.string()).describe("An array of strings containing the path to the content to be purged from the CDN cache.")
};
