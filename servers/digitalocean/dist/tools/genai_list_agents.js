import { z } from "zod";
export const toolName = `genai_list_agents`;
export const toolDescription = `List Agents`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/agents`;
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
        "only_deployed",
        "page",
        "per_page"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "only_deployed": z.boolean().describe("Only list agents that are deployed.").optional(), "page": z.number().int().describe("Page number.").optional(), "per_page": z.number().int().describe("Items per page.").optional() }).shape;
