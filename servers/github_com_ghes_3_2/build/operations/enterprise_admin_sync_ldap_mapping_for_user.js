import { z } from "zod";
export const toolName = `enterprise_admin_sync_ldap_mapping_for_user`;
export const toolDescription = `Sync LDAP mapping for a user`;
export const baseUrl = `https://github.com`;
export const path = `/admin/ldap/users/{username}/sync`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "username": z.string().describe("The handle for the GitHub user account.") }).optional() }).shape;
