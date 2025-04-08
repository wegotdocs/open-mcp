import { z } from "zod";
export const toolName = `volumes_delete`;
export const toolDescription = `Delete a Block Storage Volume`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/volumes/{volume_id}`;
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
        "volume_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "volume_id": z.string().uuid().describe("The ID of the block storage volume.")
};
