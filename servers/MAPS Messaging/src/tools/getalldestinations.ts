import { z } from "zod"

export const toolName = `getalldestinations`
export const toolDescription = `Retrieve a list of all destinations with optional filtering and sorting`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/server/destinations`
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
    "filter",
    "size",
    "sortBy"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "filter": z.string().describe("An optional filter string for selecting specific destinations. The filter should be a valid expression that complies with the selector syntax.").optional(),
  "size": z.number().int().describe("The maximum number of destinations to return in the response. A default value is used if this parameter is not provided.").optional(),
  "sortBy": z.enum(["Name","Published","Delivered","Stored","Pending","Delayed","Expired"]).describe("The attribute by which the list of destinations should be sorted before returning. Possible values include Name, Published, Delivered, Stored, Pending, Delayed, and Expired.").optional()
}