import { z } from "zod"

export const toolName = `get_admin_realms_realm_client_policies_policies`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-policies/policies`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "include-global-policies": z.boolean().optional() }).optional() }).shape