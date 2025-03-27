import { z } from "zod";
export const toolName = `enterprise_admin_get_user_stats`;
export const toolDescription = `Get users statistics`;
export const baseUrl = `https://github.com`;
export const path = `/enterprise/stats/users`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
