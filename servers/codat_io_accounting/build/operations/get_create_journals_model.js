import { z } from "zod";
export const toolName = `get_create_journals_model`;
export const toolDescription = `Get create journal model`;
export const baseUrl = `https://api.codat.io`;
export const path = `/companies/{companyId}/connections/{connectionId}/options/journals`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
        "in": "header",
        "envVarName": "AUTHORIZATION",
        "schemeType": "apiKey",
        "schemeName": "Authorization"
    }
];
export const inputParams = z.object({}).shape;
