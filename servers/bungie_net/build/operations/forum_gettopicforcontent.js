import { z } from "zod";
export const toolName = `forum_gettopicforcontent`;
export const toolDescription = `Gets the post Id for the given content item's comments, if it exists.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Forum/GetTopicForContent/{contentId}/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "contentId": z.number().int() }).optional() }).shape;
