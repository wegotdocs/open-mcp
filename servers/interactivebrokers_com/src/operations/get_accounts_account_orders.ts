import { z } from "zod"

export const toolName = `get_accounts_account_orders`
export const toolDescription = `Open Orders`
export const baseUrl = `https://www.interactivebrokers.com/tradingapi/v1`
export const path = `/accounts/{account}/orders`
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

export const inputParams = z.object({}).shape