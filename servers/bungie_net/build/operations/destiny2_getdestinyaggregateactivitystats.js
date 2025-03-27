import { z } from "zod";
export const toolName = `destiny2_getdestinyaggregateactivitystats`;
export const toolDescription = `Gets all activities the character has participated in together with aggregate statistics for those activities.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/AggregateActivityStats/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "characterId": z.number().int().describe("The specific character whose activities should be returned."), "destinyMembershipId": z.number().int().describe("The Destiny membershipId of the user to retrieve."), "membershipType": z.number().int().describe("A valid non-BungieNet membership type.") }).optional() }).shape;
