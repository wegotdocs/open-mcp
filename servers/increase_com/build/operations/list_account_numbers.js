import { z } from "zod";
export const toolName = `list_account_numbers`;
export const toolDescription = `List Account Numbers`;
export const baseUrl = `https://api.increase.com`;
export const path = `/account_numbers`;
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
export const inputParams = z.object({ "query": z.object({ "cursor": z.string().describe("Return the page of entries after this one.").optional(), "limit": z.number().int().gte(0).describe("Limit the size of the list that is returned. The default (and maximum) is 100 objects.").optional(), "status": z.enum(["active", "disabled", "canceled"]).describe("The status to retrieve Account Numbers for.").optional(), "account_id": z.string().describe("Filter Account Numbers to those belonging to the specified Account.").optional() }).optional() }).shape;
