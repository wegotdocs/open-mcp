import { z } from "zod";
export const toolName = `enterprise_admin_create_impersonation_o_auth_token`;
export const toolDescription = `Create an impersonation OAuth token`;
export const baseUrl = `https://github.com`;
export const path = `/admin/users/{username}/authorizations`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "username": z.string().describe("The handle for the GitHub user account.") }).optional(), "body": z.object({ "scopes": z.array(z.string()).describe("A list of [scopes](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).") }).optional() }).shape;
