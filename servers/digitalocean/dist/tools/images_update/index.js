export { inputParams } from "./schema/root.js";
export const toolName = `images_update`;
export const toolDescription = `Update an Image`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/images/{image_id}`;
export const method = `put`;
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
        "image_id"
    ],
    "cookie": [],
    "body": [
        "name",
        "distribution",
        "description"
    ]
};
export const flatMap = {};
