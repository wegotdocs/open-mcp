import { z } from "zod";
export const toolName = `enterprise_admin_get_org_stats`;
export const toolDescription = `Get organization statistics`;
export const baseUrl = `https://github.com`;
export const path = `/enterprise/stats/orgs`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
