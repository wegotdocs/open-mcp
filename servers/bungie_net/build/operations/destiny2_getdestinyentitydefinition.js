import { z } from "zod";
export const toolName = `destiny2_getdestinyentitydefinition`;
export const toolDescription = `Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Manifest/{entityType}/{hashIdentifier}/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "entityType": z.string().describe("The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation."), "hashIdentifier": z.number().int().describe("The hash identifier for the specific Entity you want returned.") }).optional() }).shape;
