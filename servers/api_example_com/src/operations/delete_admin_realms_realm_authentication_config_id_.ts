import { z } from "zod"

export const toolName = `delete_admin_realms_realm_authentication_config_id_`
export const toolDescription = `Delete authenticator configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/config/{id}`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Configuration id") }).optional() }).shape