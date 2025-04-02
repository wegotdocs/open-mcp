import { z } from "zod";
export const toolName = `vpcpeerings_delete`;
export const toolDescription = `Delete a VPC peering`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/vpc_peerings/{vpc_peering_id}`;
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
        "vpc_peering_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "vpc_peering_id": z.string().uuid().describe("A unique identifier for a VPC peering.") }).shape;
