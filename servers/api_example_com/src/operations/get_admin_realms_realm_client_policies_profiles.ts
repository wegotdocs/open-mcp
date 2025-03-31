import { z } from "zod"

export const toolName = `get_admin_realms_realm_client_policies_profiles`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-policies/profiles`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "include-global-profiles": z.boolean().optional() }).optional() }).shape