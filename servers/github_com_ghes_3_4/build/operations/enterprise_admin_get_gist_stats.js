import { z } from "zod";
export const toolName = `enterprise_admin_get_gist_stats`;
export const toolDescription = `Get gist statistics`;
export const baseUrl = `https://github.com`;
export const path = `/enterprise/stats/gists`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
