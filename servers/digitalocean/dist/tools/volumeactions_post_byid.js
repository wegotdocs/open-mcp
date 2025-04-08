import { z } from "zod";
export const toolName = `volumeactions_post_byid`;
export const toolDescription = `Initiate A Block Storage Action By Volume Id`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/volumes/{volume_id}/actions`;
export const method = `post`;
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
        "volume_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "volume_id": z.string().uuid().describe("The ID of the block storage volume."),
    "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
    "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
};
