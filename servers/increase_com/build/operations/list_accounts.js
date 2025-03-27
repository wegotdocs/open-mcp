import { z } from "zod";
export const toolName = `list_accounts`;
export const toolDescription = `List Accounts`;
export const baseUrl = `https://api.increase.com`;
export const path = `/accounts`;
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
export const inputParams = z.object({ "query": z.object({ "cursor": z.string().describe("Return the page of entries after this one.").optional(), "limit": z.number().int().gte(0).describe("Limit the size of the list that is returned. The default (and maximum) is 100 objects.").optional(), "entity_id": z.string().describe("Filter Accounts for those belonging to the specified Entity.").optional(), "status": z.enum(["open", "closed"]).describe("Filter Accounts for those with the specified status.").optional() }).optional() }).shape;
