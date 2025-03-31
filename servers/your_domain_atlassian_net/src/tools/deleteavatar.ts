import { z } from "zod"

export const toolName = `deleteavatar`
export const toolDescription = `Delete avatar`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}`
export const method = `delete`
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

export const inputParams = z.object({ "p_type": z.enum(["project","issuetype","priority"]).describe("The avatar type."), "p_owningObjectId": z.string().describe("The ID of the item the avatar is associated with."), "p_id": z.number().int().describe("The ID of the avatar.") }).shape