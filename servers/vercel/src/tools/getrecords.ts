import { z } from "zod"

export const toolName = `getrecords`
export const toolDescription = `List existing DNS records`
export const baseUrl = `https://api.vercel.com`
export const path = `/v4/domains/{domain}/records`
export const method = `get`
export const security = [
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
    "limit",
    "since",
    "until",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "domain"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "domain": z.string(),
  "limit": z.string().describe("Maximum number of records to list from a request.").optional(),
  "since": z.string().describe("Get records created after this JavaScript timestamp.").optional(),
  "until": z.string().describe("Get records created before this JavaScript timestamp.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}