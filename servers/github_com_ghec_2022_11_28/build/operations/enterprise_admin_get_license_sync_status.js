import { z } from "zod";
export const toolName = `enterprise_admin_get_license_sync_status`;
export const toolDescription = `Get a license sync status`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/license-sync-status`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional() }).shape;
