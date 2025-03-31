import { z } from "zod"

export const toolName = `post_admin_realms_realm_authentication_flows`
export const toolDescription = `Create a new authentication flow`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "id": z.string().optional(), "alias": z.string().optional(), "description": z.string().optional(), "providerId": z.string().optional(), "topLevel": z.boolean().optional(), "builtIn": z.boolean().optional(), "authenticationExecutions": z.array(z.object({ "authenticatorConfig": z.string().optional(), "authenticator": z.string().optional(), "authenticatorFlow": z.boolean().optional(), "requirement": z.string().optional(), "priority": z.number().int().optional(), "flowAlias": z.string().optional(), "userSetupAllowed": z.boolean().optional() })).optional() }).optional() }).shape