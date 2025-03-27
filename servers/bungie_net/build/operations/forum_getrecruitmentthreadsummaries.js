import { z } from "zod";
export const toolName = `forum_getrecruitmentthreadsummaries`;
export const toolDescription = `Allows the caller to get a list of to 25 recruitment thread summary information objects.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Forum/Recruit/Summaries/`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
