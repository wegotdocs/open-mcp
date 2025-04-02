import { z } from "zod";
export const toolName = `droplets_destroy_retrywithassociatedresources`;
export const toolDescription = `Retry a Droplet Destroy with Associated Resources Request`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/droplets/{droplet_id}/destroy_with_associated_resources/retry`;
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
        "droplet_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.") }).shape;
