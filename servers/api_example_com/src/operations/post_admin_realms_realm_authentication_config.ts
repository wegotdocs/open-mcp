import { z } from "zod"

export const toolName = `post_admin_realms_realm_authentication_config`
export const toolDescription = `Create new authenticator configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/config`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "id": z.string().optional(), "alias": z.string().optional(), "config": z.record(z.string()).optional() }).optional() }).shape