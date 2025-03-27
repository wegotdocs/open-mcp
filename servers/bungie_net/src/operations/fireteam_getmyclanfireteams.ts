import { z } from "zod"

export const toolName = `fireteam_getmyclanfireteams`
export const toolDescription = `Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Fireteam/Clan/{groupId}/My/{platform}/{includeClosed}/{page}/`
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

export const inputParams = z.object({ "query": z.object({ "groupFilter": z.boolean().describe("If true, filter by clan. Otherwise, ignore the clan and show all of the user's fireteams.").optional(), "langFilter": z.string().describe("An optional language filter.").optional() }).optional(), "path": z.object({ "groupId": z.number().int().describe("The group id of the clan. (This parameter is ignored unless the optional query parameter groupFilter is true)."), "includeClosed": z.boolean().describe("If true, return fireteams that have been closed."), "page": z.number().int().describe("Deprecated parameter, ignored."), "platform": z.number().int().describe("The platform filter.") }).optional() }).shape