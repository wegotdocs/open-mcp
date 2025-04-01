import { z } from "zod"

export const toolName = `get_admin_realms_realm_authentication_config_id_`
export const toolDescription = `Get authenticator configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/config/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Configuration id") }).optional() }).shape