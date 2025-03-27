import { z } from "zod"

export const toolName = `get_secdef`
export const toolDescription = `Get security definition`
export const baseUrl = `https://www.interactivebrokers.com/tradingapi/v1`
export const path = `/secdef`
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

export const inputParams = z.object({ "body": z.object({ "conid": z.number().describe("The internal IB identifier for the trading product specified as an integer.").optional(), "currency": z.string().describe("The currency in which the given pair trades.").optional(), "exchange": z.string().describe("The exchange on which the trading product is listed (required for type=STK).").optional(), "symbol": z.string().describe("The symbol that identifies the trading product.").optional(), "type": z.string().describe("The instrument type of the contract (CASH).").optional() }).optional() }).shape