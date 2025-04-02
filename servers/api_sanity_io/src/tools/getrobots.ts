import { z } from "zod"

export const toolName = `getrobots`
export const toolDescription = `Get robots with access to this resource`
export const baseUrl = `https://api.sanity.io`
export const path = `/vX/access/{resourceType}/{resourceId}/robots`
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
    "includeChildren",
    "nextCursor",
    "limit"
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

export const inputParams = z.object({ "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"), "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."), "includeChildren": z.boolean().describe("Whether to include children resources in the response. Only applies to `organization` resources.").optional(), "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(), "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page.") }).shape