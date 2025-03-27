import { z } from "zod"

export const toolName = `fireteam_getavailableclanfireteams`
export const toolDescription = `Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Fireteam/Clan/{groupId}/Available/{platform}/{activityType}/{dateRange}/{slotFilter}/{publicOnly}/{page}/`
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

export const inputParams = z.object({ "path": z.object({ "activityType": z.number().int().describe("The activity type to filter by."), "dateRange": z.number().int().describe("The date range to grab available fireteams."), "groupId": z.number().int().describe("The group id of the clan."), "page": z.number().int().describe("Zero based page"), "platform": z.number().int().describe("The platform filter."), "publicOnly": z.number().int().describe("Determines public/private filtering."), "slotFilter": z.number().int().describe("Filters based on available slots") }).optional(), "query": z.object({ "excludeImmediate": z.boolean().describe("If you wish the result to exclude immediate fireteams, set this to true. Immediate-only can be forced using the dateRange enum.").optional(), "langFilter": z.string().describe("An optional language filter.").optional() }).optional() }).shape