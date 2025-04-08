import { z } from "zod";
export const toolName = `droplets_list_backups`;
export const toolDescription = `List Backups for a Droplet`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/droplets/{droplet_id}/backups`;
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
    "query": [
        "per_page",
        "page"
    ],
    "header": [],
    "path": [
        "droplet_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
    "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
    "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
};
