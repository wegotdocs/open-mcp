import { z } from "zod"

export const toolName = `listpromotealiases`
export const toolDescription = `Gets a list of aliases with status for the current promote`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/projects/{projectId}/promote/aliases`
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
    "failedOnly",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "projectId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "projectId": z.string(), "limit": z.number().lte(100).describe("Maximum number of aliases to list from a request (max 100).").optional(), "since": z.number().describe("Get aliases created after this epoch timestamp.").optional(), "until": z.number().describe("Get aliases created before this epoch timestamp.").optional(), "failedOnly": z.boolean().describe("Filter results down to aliases that failed to map to the requested deployment").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape