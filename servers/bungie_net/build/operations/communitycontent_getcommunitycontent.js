import { z } from "zod";
export const toolName = `communitycontent_getcommunitycontent`;
export const toolDescription = `Returns community content.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/CommunityContent/Get/{sort}/{mediaFilter}/{page}/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "mediaFilter": z.number().int().describe("The type of media to get"), "page": z.number().int().describe("Zero based page"), "sort": z.number().int().describe("The sort mode.") }).optional() }).shape;
