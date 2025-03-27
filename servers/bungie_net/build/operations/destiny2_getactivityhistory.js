import { z } from "zod";
export const toolName = `destiny2_getactivityhistory`;
export const toolDescription = `Gets activity history stats for indicated character.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/Activities/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "characterId": z.number().int().describe("The id of the character to retrieve."), "destinyMembershipId": z.number().int().describe("The Destiny membershipId of the user to retrieve."), "membershipType": z.number().int().describe("A valid non-BungieNet membership type.") }).optional(), "query": z.object({ "count": z.number().int().describe("Number of rows to return").optional(), "mode": z.number().int().describe("A filter for the activity mode to be returned. None returns all activities. See the documentation for DestinyActivityModeType for valid values, and pass in string representation.").optional(), "page": z.number().int().describe("Page number to return, starting with 0.").optional() }).optional() }).shape;
