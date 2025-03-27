import { z } from "zod";
export const toolName = `groupv2_getpotentialgroupsformember`;
export const toolDescription = `Get information about the groups that a given member has applied to or been invited to.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GroupV2/User/Potential/{membershipType}/{membershipId}/{filter}/{groupType}/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "filter": z.number().int().describe("Filter apply to list of potential joined groups."), "groupType": z.number().int().describe("Type of group the supplied member applied."), "membershipId": z.number().int().describe("Membership ID to for which to find applied groups."), "membershipType": z.number().int().describe("Membership type of the supplied membership ID.") }).optional() }).shape;
