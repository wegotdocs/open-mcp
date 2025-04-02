import { z } from "zod";
export const toolName = `droplets_list_neighborsids`;
export const toolDescription = `List All Droplet Neighbors`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/reports/droplet_neighbors_ids`;
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
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({}).shape;
