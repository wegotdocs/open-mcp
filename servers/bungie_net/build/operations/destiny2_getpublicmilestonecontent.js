import { z } from "zod";
export const toolName = `destiny2_getpublicmilestonecontent`;
export const toolDescription = `Gets custom localized content for the milestone of the given hash, if it exists.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Milestones/{milestoneHash}/Content/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "milestoneHash": z.number().int().describe("The identifier for the milestone to be returned.") }).optional() }).shape;
