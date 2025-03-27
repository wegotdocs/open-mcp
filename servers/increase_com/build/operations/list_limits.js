import { z } from "zod";
export const toolName = `list_limits`;
export const toolDescription = `List Limits`;
export const baseUrl = `https://api.increase.com`;
export const path = `/limits`;
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
export const inputParams = z.object({ "query": z.object({ "cursor": z.string().describe("Return the page of entries after this one.").optional(), "limit": z.number().int().gte(0).describe("Limit the size of the list that is returned. The default (and maximum) is 100 objects.").optional(), "model_id": z.string().min(1).max(200).describe("The model to retrieve limits for.").optional(), "status": z.string().min(1).max(200).describe("The status to retrieve limits for.").optional() }).optional() }).shape;
