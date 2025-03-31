import { z } from "zod"

export const toolName = `reorderissuetypesinissuetypescheme`
export const toolDescription = `Change order of issue types`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype/move`
export const method = `put`
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

export const inputParams = z.object({ "p_issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme."), "b_after": z.string().describe("The ID of the issue type to place the moved issue types after. Required if `position` isn't provided.").optional(), "b_issueTypeIds": z.array(z.string()).describe("A list of the issue type IDs to move. The order of the issue type IDs in the list is the order they are given after the move."), "b_position": z.enum(["First","Last"]).describe("The position the issue types should be moved to. Required if `after` isn't provided.").optional() }).shape