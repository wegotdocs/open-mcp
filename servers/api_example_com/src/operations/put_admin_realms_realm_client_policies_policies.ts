import { z } from "zod"

export const toolName = `put_admin_realms_realm_client_policies_policies`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-policies/policies`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "policies": z.array(z.object({ "name": z.string().optional(), "description": z.string().optional(), "enabled": z.boolean().optional(), "conditions": z.array(z.object({ "condition": z.string().optional(), "configuration": z.array(z.any()).optional() })).optional(), "profiles": z.array(z.string()).optional() })).optional(), "globalPolicies": z.array(z.object({ "name": z.string().optional(), "description": z.string().optional(), "enabled": z.boolean().optional(), "conditions": z.array(z.object({ "condition": z.string().optional(), "configuration": z.array(z.any()).optional() })).optional(), "profiles": z.array(z.string()).optional() })).optional() }).optional() }).shape