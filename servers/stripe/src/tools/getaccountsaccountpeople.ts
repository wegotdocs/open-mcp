import { z } from "zod"

export const toolName = `getaccountsaccountpeople`
export const toolDescription = `List all persons`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/accounts/{account}/people`
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
    "limit",
    "relationship",
    "starting_after"
  ],
  "header": [],
  "path": [
    "account"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "account": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "relationship": z.object({ "authorizer": z.boolean().optional(), "director": z.boolean().optional(), "executive": z.boolean().optional(), "legal_guardian": z.boolean().optional(), "owner": z.boolean().optional(), "representative": z.boolean().optional() }).describe("Filters on the list of people returned based on the person's relationship to the account's company.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional()
}