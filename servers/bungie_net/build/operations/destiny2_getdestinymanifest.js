import { z } from "zod";
export const toolName = `destiny2_getdestinymanifest`;
export const toolDescription = `Returns the current version of the manifest as a json object.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Manifest/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
