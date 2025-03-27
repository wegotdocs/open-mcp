import { z } from "zod";
export const toolName = `destiny2_getclanbannersource`;
export const toolDescription = `Returns the dictionary of values for the Clan Banner`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Clan/ClanBannerDictionary/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
