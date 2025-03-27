import { z } from "zod";
export const toolName = `groupv2_recovergroupforfounder`;
export const toolDescription = `Allows a founder to manually recover a group they can see in game but not on bungie.net`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GroupV2/Recover/{membershipType}/{membershipId}/{groupType}/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "groupType": z.number().int().describe("Type of group the supplied member founded."), "membershipId": z.number().int().describe("Membership ID to for which to find founded groups."), "membershipType": z.number().int().describe("Membership type of the supplied membership ID.") }).optional() }).shape;
