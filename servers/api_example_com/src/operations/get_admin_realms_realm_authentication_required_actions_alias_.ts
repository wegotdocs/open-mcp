import { z } from "zod"

export const toolName = `get_admin_realms_realm_authentication_required_actions_alias_`
export const toolDescription = `Get required action for alias`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/required-actions/{alias}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "alias": z.string().describe("Alias of required action") }).optional() }).shape