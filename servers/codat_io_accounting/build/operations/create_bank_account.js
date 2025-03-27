import { z } from "zod";
export const toolName = `create_bank_account`;
export const toolDescription = `Create bank account`;
export const baseUrl = `https://api.codat.io`;
export const path = `/companies/{companyId}/connections/{connectionId}/push/bankAccounts`;
export const method = `post`;
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
export const inputParams = z.object({ "query": z.object({ "allowSyncOnPushComplete": z.boolean(), "timeoutInMinutes": z.number().int().optional() }).optional(), "body": z.string().optional() }).shape;
