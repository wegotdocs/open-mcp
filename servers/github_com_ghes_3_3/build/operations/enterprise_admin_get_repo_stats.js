import { z } from "zod";
export const toolName = `enterprise_admin_get_repo_stats`;
export const toolDescription = `Get repository statistics`;
export const baseUrl = `https://github.com`;
export const path = `/enterprise/stats/repos`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
