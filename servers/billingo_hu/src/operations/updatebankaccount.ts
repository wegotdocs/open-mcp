import { z } from "zod"

export const toolName = `updatebankaccount`
export const toolDescription = `Update a bank account`
export const baseUrl = `https://api.billingo.hu/v3`
export const path = `/bank-accounts/{id}`
export const method = `put`
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

export const inputParams = z.object({ "path": z.object({ "id": z.number().int() }).optional(), "body": z.object({ "account_number": z.string(), "account_number_iban": z.string().optional(), "currency": z.enum(["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","LTL","LVL","MXN","MYR","NOK","NZD","PHP","PLN","RON","RSD","RUB","SEK","SGD","THB","TRY","UAH","USD","ZAR"]), "id": z.number().int().readonly().optional(), "name": z.string(), "need_qr": z.boolean(), "swift": z.string().optional() }).optional() }).shape