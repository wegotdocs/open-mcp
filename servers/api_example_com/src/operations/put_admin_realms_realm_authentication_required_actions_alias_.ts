import { z } from "zod"

export const toolName = `put_admin_realms_realm_authentication_required_actions_alias_`
export const toolDescription = `Update required action`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/required-actions/{alias}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "alias": z.string().describe("Alias of required action") }).optional(), "body": z.object({ "alias": z.string().optional(), "name": z.string().optional(), "providerId": z.string().optional(), "enabled": z.boolean().optional(), "defaultAction": z.boolean().optional(), "priority": z.number().int().optional(), "config": z.record(z.string()).optional() }).optional() }).shape