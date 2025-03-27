import { z } from "zod"

export const toolName = `groupv2_approveallpending`
export const toolDescription = `Approve all of the pending users for the given group.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/{groupId}/Members/ApproveAll/`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("ID of the group.") }).optional() }).shape