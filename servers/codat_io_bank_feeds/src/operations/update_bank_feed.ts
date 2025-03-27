import { z } from "zod"

export const toolName = `update_bank_feed`
export const toolDescription = `Update bank feed bank account`
export const baseUrl = `https://api.codat.io`
export const path = `/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{accountId}`
export const method = `patch`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({ "path": z.object({ "companyId": z.string().uuid().describe("Unique identifier for your SMB in Codat."), "connectionId": z.string().uuid().describe("Unique identifier for a company's data connection."), "accountId": z.string().uuid().describe("Unique identifier for an account") }).optional(), "body": z.object({ "accountName": z.string().nullable().describe("The bank account name").optional(), "accountNumber": z.string().nullable().describe("The account number").optional(), "accountType": z.string().nullable().describe("The type of bank account e.g. Credit").optional(), "balance": z.number().nullable().describe("The latest balance for the bank account").optional(), "currency": z.string().nullable().describe("The currency e.g. USD").optional(), "feedStartDate": z.string().nullable().describe("In Codat's data model, dates and times are represented using the <a class=\"external\" href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:\n\n```\n2020-10-08T22:40:50Z\n2021-01-01T00:00:00\n```\n\n\n\nWhen syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:\n\n- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`\n- Unqualified local time: `2021-11-15T01:00:00`\n- UTC time offsets: `2021-11-15T01:00:00-05:00`\n\n> Time zones\n> \n> Not all dates from Codat will contain information about time zones.  \n> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.").optional(), "id": z.string().describe("Unique ID for the bank feed account"), "modifiedDate": z.string().nullable().describe("The last date the bank account was modified").optional(), "sortCode": z.string().nullable().describe("The sort code").optional(), "status": z.string().nullable().optional() }).strict().describe("The target bank account in a supported accounting package for ingestion into a bank feed.").optional() }).shape