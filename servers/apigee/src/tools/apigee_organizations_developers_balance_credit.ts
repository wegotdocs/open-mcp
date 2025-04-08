import { z } from "zod"

export const toolName = `apigee_organizations_developers_balance_credit`
export const toolDescription = `Credits the account balance for the developer.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/developers/{developersId}/balance:credit`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "organizationsId",
    "developersId"
  ],
  "cookie": [],
  "body": [
    "transactionId",
    "transactionAmount"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "developersId": z.string(),
  "transactionId": z.string().describe("Each transaction_id uniquely identifies a credit balance request. If multiple requests are received with the same transaction_id, only one of them will be considered.").optional(),
  "transactionAmount": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if `currencyCode` is `\"USD\"`, then 1 unit is one US dollar.").optional() }).describe("The amount of money to be credited. The wallet corresponding to the currency specified within `transaction_amount` will be updated. For example, if you specified `currency_code` within `transaction_amount` as \"USD\", then the amount would be added to the wallet which has the \"USD\" currency or if no such wallet exists, a new wallet will be created with the \"USD\" currency.").optional()
}