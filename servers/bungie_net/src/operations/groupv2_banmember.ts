import { z } from "zod"

export const toolName = `groupv2_banmember`
export const toolDescription = `Bans the requested member from the requested group for the specified period of time.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Ban/`
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

export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("Group ID that has the member to ban."), "membershipId": z.number().int().describe("Membership ID of the member to ban from the group."), "membershipType": z.number().int().describe("Membership type of the provided membership ID.") }).optional() }).shape