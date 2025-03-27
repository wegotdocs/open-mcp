import { z } from "zod";
export const toolName = `enterprise_admin_ping_global_webhook`;
export const toolDescription = `Ping a global webhook`;
export const baseUrl = `https://github.com`;
export const path = `/admin/hooks/{hook_id}/pings`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "hook_id": z.number().int().describe("The unique identifier of the hook.") }).optional() }).shape;
