import { z } from "zod"

export const toolName = `groupv2_getrecommendedgroups`
export const toolDescription = `Gets groups recommended for you based on the groups to whom those you follow belong.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/GroupV2/Recommended/{groupType}/{createDateRange}/`
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

export const inputParams = z.object({ "path": z.object({ "createDateRange": z.number().int().describe("Requested range in which to pull recommended groups"), "groupType": z.number().int().describe("Type of groups requested") }).optional() }).shape