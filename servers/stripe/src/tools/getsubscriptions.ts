import { z } from "zod"

export const toolName = `getsubscriptions`
export const toolDescription = `List subscriptions`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/subscriptions`
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
    "automatic_tax",
    "collection_method",
    "created",
    "current_period_end",
    "current_period_start",
    "customer",
    "ending_before",
    "expand",
    "limit",
    "price",
    "starting_after",
    "status",
    "test_clock"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "automatic_tax": z.object({ "enabled": z.boolean() }).describe("Filter subscriptions by their automatic tax settings.").optional(), "collection_method": z.enum(["charge_automatically","send_invoice"]).describe("The collection method of the subscriptions to retrieve. Either `charge_automatically` or `send_invoice`.").optional(), "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return subscriptions that were created during the given date interval.").optional(), "current_period_end": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return subscriptions whose current_period_end falls within the given date interval.").optional(), "current_period_start": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return subscriptions whose current_period_start falls within the given date interval.").optional(), "customer": z.string().max(5000).describe("The ID of the customer whose subscriptions will be retrieved.").optional(), "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(), "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(), "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(), "price": z.string().max(5000).describe("Filter for subscriptions that contain this recurring price ID.").optional(), "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(), "status": z.enum(["active","all","canceled","ended","incomplete","incomplete_expired","past_due","paused","trialing","unpaid"]).describe("The status of the subscriptions to retrieve. Passing in a value of `canceled` will return all canceled subscriptions, including those belonging to deleted customers. Pass `ended` to find subscriptions that are canceled and subscriptions that are expired due to [incomplete payment](https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses). Passing in a value of `all` will return subscriptions of all statuses. If no value is supplied, all subscriptions that have not been canceled are returned.").optional(), "test_clock": z.string().max(5000).describe("Filter for subscriptions that are associated with the specified test clock. The response will not include subscriptions with test clocks if this and the customer parameter is not set.").optional() }).shape