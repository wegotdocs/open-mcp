import { z } from "zod";
export const toolName = `groupv2_getgroupbynamev2`;
export const toolDescription = `Get information about a specific group with the given name and type. The POST version.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GroupV2/NameV2/`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
