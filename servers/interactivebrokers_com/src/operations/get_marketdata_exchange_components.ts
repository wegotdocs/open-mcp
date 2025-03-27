import { z } from "zod"

export const toolName = `get_marketdata_exchange_components`
export const toolDescription = `Exchange Components`
export const baseUrl = `https://www.interactivebrokers.com/tradingapi/v1`
export const path = `/marketdata/exchange_components`
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