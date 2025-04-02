import { z } from "zod";
export const toolName = `vpcs_list_peerings`;
export const toolDescription = `List the Peerings of a VPC`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/vpcs/{vpc_id}/peerings`;
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
    "query": [
        "per_page",
        "page"
    ],
    "header": [],
    "path": [
        "vpc_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "vpc_id": z.string().uuid().describe("A unique identifier for a VPC."), "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.") }).shape;
