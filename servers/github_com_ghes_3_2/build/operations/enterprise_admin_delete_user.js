import { z } from "zod";
export const toolName = `enterprise_admin_delete_user`;
export const toolDescription = `Delete a user`;
export const baseUrl = `https://github.com`;
export const path = `/admin/users/{username}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "username": z.string().describe("The handle for the GitHub user account.") }).optional() }).shape;
