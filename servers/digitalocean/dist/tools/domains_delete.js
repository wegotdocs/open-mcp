import { z } from "zod";
export const toolName = `domains_delete`;
export const toolDescription = `Delete a Domain`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/domains/{domain_name}`;
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
        "domain_name"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "domain_name": z.string().describe("The name of the domain itself.") }).shape;
