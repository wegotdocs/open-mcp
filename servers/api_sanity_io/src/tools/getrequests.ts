import { z } from "zod"

export const toolName = `getrequests`
export const toolDescription = `List all requests for given project/organization.`
export const baseUrl = `https://api.sanity.io`
export const path = `/v2024-07-01/access/{resourceType}/{resourceId}/requests`
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
    "includeChildren"
  ],
  "header": [],
  "path": [
    "resourceType",
    "resourceId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"), "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."), "includeChildren": z.boolean().describe("Whether to include children resources in the response. Only applies to `organization` resources.").optional() }).shape