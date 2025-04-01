import { z } from "zod"

export const toolName = `get_admin_realms_realm_admin_events`
export const toolDescription = `Get admin events Returns all admin events, or filters events based on URL query parameters listed here`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/admin-events`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "authClient": z.string().optional(), "authIpAddress": z.string().optional(), "authRealm": z.string().optional(), "authUser": z.string().describe("user id").optional(), "dateFrom": z.string().optional(), "dateTo": z.string().optional(), "first": z.number().int().optional(), "max": z.number().int().describe("Maximum results size (defaults to 100)").optional(), "operationTypes": z.array(z.string()).optional(), "resourcePath": z.string().optional(), "resourceTypes": z.array(z.string()).optional() }).optional() }).shape