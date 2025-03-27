import { z } from "zod";
export const toolName = `create_bank_transactions`;
export const toolDescription = `Create bank transactions`;
export const baseUrl = `https://api.codat.io`;
export const path = `/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions`;
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
export const inputParams = z.object({ "path": z.object({ "companyId": z.string().uuid().describe("Unique identifier for your SMB in Codat."), "connectionId": z.string().uuid().describe("Unique identifier for a company's data connection."), "accountId": z.string().uuid().describe("Unique identifier for an account") }).optional(), "query": z.object({ "allowSyncOnPushComplete": z.boolean(), "timeoutInMinutes": z.number().int().optional() }).optional(), "body": z.object({ "accountId": z.union([z.string(), z.null()]).optional(), "transactions": z.union([z.array(z.string()), z.null()]).optional() }).describe("> **Accessing Bank Accounts through Banking API**\n> \n> This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. \n>\n> To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/operations/list-all-banking-transactions)\n\n> View the coverage for bank transactions in the <a className=\"external\" href=\"https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions\" target=\"_blank\">Data coverage explorer</a>.\n\n## Overview\n\nTransactional banking data for a specific company and account.\n\nBank transactions include the:\n* Amount of the transaction.\n* Current account balance.\n* Transaction type, for example, credit, debit, or transfer.").optional() }).shape;
