import { z } from "zod"

export const toolName = `destiny2_getclanaggregatestats`
export const toolDescription = `Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Stats/AggregateClanStats/{groupId}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("Group ID of the clan whose leaderboards you wish to fetch.") }).optional(), "query": z.object({ "modes": z.string().describe("List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.").optional() }).optional() }).shape