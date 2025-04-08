import { z } from "zod";
export const toolName = `vpcs_create_peerings`;
export const toolDescription = `Create a Peering with a VPC`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/vpcs/{vpc_id}/peerings`;
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
        "vpc_id"
    ],
    "cookie": [],
    "body": [
        "name",
        "b_vpc_id"
    ]
};
export const flatMap = {
    "b_vpc_id": "vpc_id"
};
export const inputParams = {
    "vpc_id": z.string().uuid().describe("A unique identifier for a VPC."),
    "name": z.string().regex(new RegExp("^[a-zA-Z0-9\\-\\.]+$")).describe("The name of the VPC peering. Must be unique and may only contain alphanumeric characters, dashes, and periods."),
    "b_vpc_id": z.string().uuid().describe("The ID of the VPC to peer with.")
};
