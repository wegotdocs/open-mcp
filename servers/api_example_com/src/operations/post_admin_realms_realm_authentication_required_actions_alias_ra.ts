import { z } from "zod"

export const toolName = `post_admin_realms_realm_authentication_required_actions_alias_ra`
export const toolDescription = `Raise required action's priority`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/required-actions/{alias}/raise-priority`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "alias": z.string().describe("Alias of required action") }).optional() }).shape