import { z } from "zod";
export const toolName = `forum_getpoll`;
export const toolDescription = `Gets the specified forum poll.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Forum/Poll/{topicId}/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "topicId": z.number().int().describe("The post id of the topic that has the poll.") }).optional() }).shape;
