import { z } from "zod";
export const toolName = `list_routing_numbers`;
export const toolDescription = `List Routing Numbers`;
export const baseUrl = `https://api.increase.com`;
export const path = `/routing_numbers`;
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
export const inputParams = z.object({ "query": z.object({ "cursor": z.string().describe("Return the page of entries after this one.").optional(), "limit": z.number().int().gte(0).describe("Limit the size of the list that is returned. The default (and maximum) is 100 objects.").optional(), "routing_number": z.string().min(9).max(9).describe("Filter financial institutions by routing number.") }).optional() }).shape;
