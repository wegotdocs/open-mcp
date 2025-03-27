import { z } from "zod"

export const toolName = `getconversionrate`
export const toolDescription = `Get currencies exchange rate.`
export const baseUrl = `https://api.billingo.hu/v3`
export const path = `/currencies`
export const method = `get`
export const security = [
  {
    "key": "X-API-KEY",
    "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-API-KEY"
  }
]

export const inputParams = z.object({ "query": z.object({ "from": z.enum(["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","LTL","LVL","MXN","MYR","NOK","NZD","PHP","PLN","RON","RSD","RUB","SEK","SGD","THB","TRY","UAH","USD","ZAR"]), "to": z.enum(["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","LTL","LVL","MXN","MYR","NOK","NZD","PHP","PLN","RON","RSD","RUB","SEK","SGD","THB","TRY","UAH","USD","ZAR"]) }).optional() }).shape