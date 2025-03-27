import { z } from "zod";
export const toolName = `list_bank_account_transactions`;
export const toolDescription = `List bank transactions for bank account`;
export const baseUrl = `https://api.codat.io`;
export const path = `/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}/bankTransactions`;
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
export const inputParams = z.object({ "path": z.object({ "companyId": z.string().uuid().describe("Unique identifier for your SMB in Codat."), "connectionId": z.string().uuid().describe("Unique identifier for a company's data connection."), "accountId": z.string().uuid().describe("Unique identifier for an account") }).optional(), "query": z.object({ "page": z.number().int().gte(0).describe("Page number. [Read more](https://docs.codat.io/using-the-api/paging)."), "pageSize": z.number().int().gte(1).lte(5000).describe("Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging)."), "query": z.string().describe("Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).").optional(), "orderBy": z.string().describe("Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).").optional() }).optional() }).shape;
