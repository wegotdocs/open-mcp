import { z } from "zod";
export const toolName = `imageactions_post`;
export const toolDescription = `Initiate an Image Action`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/images/{image_id}/actions`;
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
    "query": [],
    "header": [],
    "path": [
        "image_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "image_id": z.number().int().describe("A unique number that can be used to identify and reference a specific image.")
};
