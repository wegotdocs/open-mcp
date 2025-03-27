import { z } from "zod";
export const toolName = `destiny2_getpublicmilestones`;
export const toolDescription = `Gets public information about currently available Milestones.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Milestones/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
