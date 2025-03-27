import { z } from "zod";
export const toolName = `enterprise_admin_create_user`;
export const toolDescription = `Create a user`;
export const baseUrl = `https://github.com`;
export const path = `/admin/users`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "email": z.string().describe("**Required for built-in authentication.** The user's email\naddress. This parameter can be omitted when using CAS, LDAP, or SAML.\nFor more information, see \"[About authentication for your enterprise](https://docs.github.com/enterprise-server@3.2/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).\"").optional(), "login": z.string().describe("The user's username.") }).optional() }).shape;
