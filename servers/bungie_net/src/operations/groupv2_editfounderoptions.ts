import { z } from "zod"

export const toolName = `groupv2_editfounderoptions`
export const toolDescription = `Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/{groupId}/EditFounderOptions/`
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

export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("Group ID of the group to edit.") }).optional() }).shape