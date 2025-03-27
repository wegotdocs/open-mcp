import { z } from "zod";
export const toolName = `destiny2_searchdestinyplayerbybungiename`;
export const toolDescription = `Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/SearchDestinyPlayerByBungieName/{membershipType}/`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "membershipType": z.number().int().describe("A valid non-BungieNet membership type, or All. Indicates which memberships to return. You probably want this set to All.") }).optional() }).shape;
