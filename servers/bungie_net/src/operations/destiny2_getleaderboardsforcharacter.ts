import { z } from "zod"

export const toolName = `destiny2_getleaderboardsforcharacter`
export const toolDescription = `Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/{characterId}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "characterId": z.number().int().describe("The specific character to build the leaderboard around for the provided Destiny Membership."), "destinyMembershipId": z.number().int().describe("The Destiny membershipId of the user to retrieve."), "membershipType": z.number().int().describe("A valid non-BungieNet membership type.") }).optional(), "query": z.object({ "maxtop": z.number().int().describe("Maximum number of top players to return. Use a large number to get entire leaderboard.").optional(), "modes": z.string().describe("List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.").optional(), "statid": z.string().describe("ID of stat to return rather than returning all Leaderboard stats.").optional() }).optional() }).shape