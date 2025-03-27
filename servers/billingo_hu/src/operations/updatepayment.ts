import { z } from "zod"

export const toolName = `updatepayment`
export const toolDescription = `Update payment history`
export const baseUrl = `https://api.billingo.hu/v3`
export const path = `/documents/{id}/payments`
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

export const inputParams = z.object({ "path": z.object({ "id": z.number().int() }).optional(), "body": z.array(z.object({ "conversion_rate": z.number().optional(), "date": z.string().date(), "payment_method": z.enum(["aruhitel","bankcard","barion","barter","cash","cash_on_delivery","coupon","elore_utalas","ep_kartya","kompenzacio","levonas","online_bankcard","payoneer","paypal","paypal_utolag","payu","pick_pack_pont","postai_csekk","postautalvany","skrill","szep_card","transferwise","upwork","utalvany","valto","wire_transfer"]), "price": z.number(), "voucher_number": z.string().optional() })).optional() }).shape