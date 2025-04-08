import { z } from "zod";
export const toolName = `dropletactions_post_bytag`;
export const toolDescription = `Acting on Tagged Droplets`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/droplets/actions`;
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
        "tag_name"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "tag_name": z.string().describe("Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.").optional()
};
