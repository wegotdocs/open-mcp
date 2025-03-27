import { z } from "zod";
export const toolName = `get_bank_account`;
export const toolDescription = `Get bank account`;
export const baseUrl = `https://api.codat.io`;
export const path = `/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}`;
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
