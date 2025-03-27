import { z } from "zod"

export const toolName = `destiny2_gethistoricalstatsforaccount`
export const toolDescription = `Gets aggregate historical stats organized around each character for a given account.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "destinyMembershipId": z.number().int().describe("The Destiny membershipId of the user to retrieve."), "membershipType": z.number().int().describe("A valid non-BungieNet membership type.") }).optional(), "query": z.object({ "groups": z.array(z.number().int().describe("If the enum value is > 100, it is a \"special\" group that cannot be queried for directly (special cases apply to when they are returned, and are not relevant in general cases)")).describe("Groups of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals.").optional() }).optional() }).shape