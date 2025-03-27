import { z } from "zod";
export const toolName = `enterprise_admin_get_hooks_stats`;
export const toolDescription = `Get hooks statistics`;
export const baseUrl = `https://github.com`;
export const path = `/enterprise/stats/hooks`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
