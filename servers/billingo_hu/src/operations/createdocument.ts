import { z } from "zod"

export const toolName = `createdocument`
export const toolDescription = `Create a document`
export const baseUrl = `https://api.billingo.hu/v3`
export const path = `/documents`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "bank_account_id": z.number().int().optional(), "block_id": z.number().int(), "comment": z.string().optional(), "conversion_rate": z.number(), "currency": z.enum(["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","LTL","LVL","MXN","MYR","NOK","NZD","PHP","PLN","RON","RSD","RUB","SEK","SGD","THB","TRY","UAH","USD","ZAR"]), "due_date": z.string().date(), "electronic": z.boolean(), "fulfillment_date": z.string().date(), "items": z.array(z.object({ "product_id": z.number().int(), "quantity": z.number() })).optional(), "language": z.enum(["de","en","fr","hr","hu","it","ro","sk"]), "paid": z.boolean(), "partner_id": z.number().int(), "payment_method": z.enum(["aruhitel","bankcard","barion","barter","cash","cash_on_delivery","coupon","elore_utalas","ep_kartya","kompenzacio","levonas","online_bankcard","payoneer","paypal","paypal_utolag","payu","pick_pack_pont","postai_csekk","postautalvany","skrill","szep_card","transferwise","upwork","utalvany","valto","wire_transfer"]), "settings": z.object({ "mediated_service": z.boolean(), "online_payment": z.enum(["","Barion","SimplePay","no"]).optional(), "place_id": z.number().int().optional(), "round": z.enum(["five","none","one","ten"]).optional(), "without_financial_fulfillment": z.boolean() }).optional(), "type": z.enum(["advance","draft","invoice","proforma"]), "vendor_id": z.string().optional() }).optional() }).shape