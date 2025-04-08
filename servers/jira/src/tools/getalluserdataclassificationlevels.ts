import { z } from "zod"

export const toolName = `getalluserdataclassificationlevels`
export const toolDescription = `Get all classification levels`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/classification-levels`
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
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "status",
    "orderBy"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "status": z.array(z.enum(["PUBLISHED","ARCHIVED","DRAFT"]).describe("The status of the project classification.")).describe("Optional set of statuses to filter by.").optional(),
  "orderBy": z.enum(["rank","-rank","+rank"]).describe("Ordering of the results by a given field. If not provided, values will not be sorted.").optional()
}