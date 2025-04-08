import { z } from "zod"

export const toolName = `getbillingmetersideventsummaries`
export const toolDescription = `List billing meter event summaries`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/billing/meters/{id}/event_summaries`
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
    "customer",
    "end_time",
    "ending_before",
    "expand",
    "limit",
    "start_time",
    "starting_after",
    "value_grouping_window"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "id": z.string().max(5000).describe("Unique identifier for the object."),
  "customer": z.string().max(5000).describe("The customer for which to fetch event summaries."),
  "end_time": z.number().int().describe("The timestamp from when to stop aggregating meter events (exclusive). Must be aligned with minute boundaries."),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "start_time": z.number().int().describe("The timestamp from when to start aggregating meter events (inclusive). Must be aligned with minute boundaries."),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
  "value_grouping_window": z.enum(["day","hour"]).describe("Specifies what granularity to use when generating event summaries. If not specified, a single event summary would be returned for the specified time range. For hourly granularity, start and end times must align with hour boundaries (e.g., 00:00, 01:00, ..., 23:00). For daily granularity, start and end times must align with UTC day boundaries (00:00 UTC).").optional()
}