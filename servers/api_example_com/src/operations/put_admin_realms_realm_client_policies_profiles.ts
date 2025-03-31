import { z } from "zod"

export const toolName = `put_admin_realms_realm_client_policies_profiles`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-policies/profiles`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "profiles": z.array(z.object({ "name": z.string().optional(), "description": z.string().optional(), "executors": z.array(z.object({ "executor": z.string().optional(), "configuration": z.array(z.any()).optional() })).optional() })).optional(), "globalProfiles": z.array(z.object({ "name": z.string().optional(), "description": z.string().optional(), "executors": z.array(z.object({ "executor": z.string().optional(), "configuration": z.array(z.any()).optional() })).optional() })).optional() }).optional() }).shape