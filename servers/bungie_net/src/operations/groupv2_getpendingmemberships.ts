import { z } from "zod"

export const toolName = `groupv2_getpendingmemberships`
export const toolDescription = `Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/{groupId}/Members/Pending/`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "query": z.object({ "currentpage": z.number().int().describe("Page number (starting with 1). Each page has a fixed size of 50 items per page.") }).optional(), "path": z.object({ "groupId": z.number().int().describe("ID of the group.") }).optional() }).shape