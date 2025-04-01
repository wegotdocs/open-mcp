import { z } from "zod"

export const toolName = `put_admin_realms_realm_authentication_config_id_`
export const toolDescription = `Update authenticator configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/config/{id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Configuration id") }).optional(), "body": z.object({ "id": z.string().optional(), "alias": z.string().optional(), "config": z.record(z.string()).optional() }).optional() }).shape