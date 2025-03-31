import { z } from "zod"

export const toolName = `movescreentabfield`
export const toolDescription = `Move screen tab field`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id}/move`
export const method = `post`
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

export const inputParams = z.object({ "p_screenId": z.number().int().describe("The ID of the screen."), "p_tabId": z.number().int().describe("The ID of the screen tab."), "p_id": z.string().describe("The ID of the field."), "b_after": z.string().url().describe("The ID of the screen tab field after which to place the moved screen tab field. Required if `position` isn't provided.").optional(), "b_position": z.enum(["Earlier","Later","First","Last"]).describe("The named position to which the screen tab field should be moved. Required if `after` isn't provided.").optional() }).shape