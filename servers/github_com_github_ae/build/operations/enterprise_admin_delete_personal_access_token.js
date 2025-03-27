import { z } from "zod";
export const toolName = `enterprise_admin_delete_personal_access_token`;
export const toolDescription = `Delete a personal access token`;
export const baseUrl = `https://github.com`;
export const path = `/admin/tokens/{token_id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "token_id": z.number().int().describe("The unique identifier of the token.") }).optional() }).shape;
