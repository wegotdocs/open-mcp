import { z } from "zod"

export const toolName = `post_admin_realms_realm_authentication_executions`
export const toolDescription = `Add new authentication execution`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/executions`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "authenticatorConfig": z.string().optional(), "authenticator": z.string().optional(), "authenticatorFlow": z.boolean().optional(), "requirement": z.string().optional(), "priority": z.number().int().optional(), "id": z.string().optional(), "flowId": z.string().optional(), "parentFlow": z.string().optional() }).optional() }).shape