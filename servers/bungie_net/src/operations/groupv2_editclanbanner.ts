import { z } from "zod"

export const toolName = `groupv2_editclanbanner`
export const toolDescription = `Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/{groupId}/EditClanBanner/`
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