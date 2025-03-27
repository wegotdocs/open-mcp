import { z } from "zod";
export const toolName = `retrieve_an_account_number`;
export const toolDescription = `Retrieve an Account Number`;
export const baseUrl = `https://api.increase.com`;
export const path = `/account_numbers/{account_number_id}`;
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
export const inputParams = z.object({ "path": z.object({ "account_number_id": z.string().describe("The identifier of the Account Number to retrieve.") }).optional() }).shape;
