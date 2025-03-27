import { z } from "zod";
export const toolName = `forum_getforumtagsuggestions`;
export const toolDescription = `Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Forum/GetForumTagSuggestions/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "partialtag": z.string().describe("The partial tag input to generate suggestions from.").optional() }).optional() }).shape;
