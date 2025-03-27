import { z } from "zod"

export const toolName = `destiny2_getuniqueweaponhistory`
export const toolDescription = `Gets details about unique weapon usage, including all exotic weapons.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/UniqueWeapons/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "characterId": z.number().int().describe("The id of the character to retrieve."), "destinyMembershipId": z.number().int().describe("The Destiny membershipId of the user to retrieve."), "membershipType": z.number().int().describe("A valid non-BungieNet membership type.") }).optional() }).shape