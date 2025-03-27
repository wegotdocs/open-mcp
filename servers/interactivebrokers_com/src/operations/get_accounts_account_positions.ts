import { z } from "zod"

export const toolName = `get_accounts_account_positions`
export const toolDescription = `Account Positions`
export const baseUrl = `https://www.interactivebrokers.com/tradingapi/v1`
export const path = `/accounts/{account}/positions`
export const method = `get`
export const security = [
  {
    "key": "portal",
    "value": "<mcp-env-var>PORTAL</mcp-env-var>",
    "in": "header",
    "envVarName": "PORTAL",
    "schemeType": "apiKey",
    "schemeName": "portal"
  }
]

export const inputParams = z.object({ "path": z.object({ "account": z.string().describe("Account Number") }).optional() }).shape