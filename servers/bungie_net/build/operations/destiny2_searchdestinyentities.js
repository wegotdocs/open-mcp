import { z } from "zod";
export const toolName = `destiny2_searchdestinyentities`;
export const toolDescription = `Gets a page list of Destiny items.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Armory/Search/{type}/{searchTerm}/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "page": z.number().int().describe("Page number to return, starting with 0.").optional() }).optional(), "path": z.object({ "searchTerm": z.string().describe("The string to use when searching for Destiny entities."), "type": z.string().describe("The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'.") }).optional() }).shape;
