import { z } from "zod"

export const toolName = `createprojectavatar`
export const toolDescription = `Load project avatar`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project/{projectIdOrKey}/avatar2`
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

export const inputParams = z.object({ "p_projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project."), "q_x": z.number().int().describe("The X coordinate of the top-left corner of the crop region."), "q_y": z.number().int().describe("The Y coordinate of the top-left corner of the crop region."), "q_size": z.number().int().describe("The length of each side of the crop region.") }).shape