import { z } from "zod";
export const toolName = `enterprise_admin_delete_pre_receive_hook`;
export const toolDescription = `Delete a pre-receive hook`;
export const baseUrl = `https://github.com`;
export const path = `/admin/pre-receive-hooks/{pre_receive_hook_id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "pre_receive_hook_id": z.number().int().describe("The unique identifier of the pre-receive hook.") }).optional() }).shape;
