import { z } from "zod"

export const toolName = `gettreasuryreceivedcredits`
export const toolDescription = `List all ReceivedCredits`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/treasury/received_credits`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [
    "ending_before",
    "expand",
    "financial_account",
    "limit",
    "linked_flows",
    "starting_after",
    "status"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("The FinancialAccount that received the funds."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "linked_flows": z.object({ "source_flow_type": z.enum(["credit_reversal","other","outbound_payment","outbound_transfer","payout"]) }).describe("Only return ReceivedCredits described by the flow.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["failed","succeeded"]).describe("Only return ReceivedCredits that have the given status: `succeeded` or `failed`.").optional()
}