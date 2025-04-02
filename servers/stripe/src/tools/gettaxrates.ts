import { z } from "zod"

export const toolName = `gettaxrates`
export const toolDescription = `List all tax rates`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/tax_rates`
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
    "active",
    "created",
    "ending_before",
    "expand",
    "inclusive",
    "limit",
    "starting_after"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "active": z.boolean().describe("Optional flag to filter by tax rates that are either active or inactive (archived).").optional(), "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Optional range for filtering created date.").optional(), "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(), "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(), "inclusive": z.boolean().describe("Optional flag to filter by tax rates that are inclusive (or those that are not inclusive).").optional(), "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(), "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional() }).shape