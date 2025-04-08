import { z } from "zod";
export const toolName = `droplets_destroy_bytag`;
export const toolDescription = `Deleting Droplets by Tag`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/droplets`;
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
    "query": [
        "tag_name"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "tag_name": z.string().describe("Specifies Droplets to be deleted by tag.")
};
