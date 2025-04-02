import { z } from "zod";
export const toolName = `vpcs_patch`;
export const toolDescription = `Partially Update a VPC`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/vpcs/{vpc_id}`;
export const method = `patch`;
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
        "vpc_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "vpc_id": z.string().uuid().describe("A unique identifier for a VPC.") }).shape;
