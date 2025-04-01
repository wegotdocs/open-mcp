import { z } from "zod"

export const toolName = `get_admin_realms`
export const toolDescription = `Get accessible realms Returns a list of accessible realms. The list is filtered based on what realms the caller is allowed to view.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "briefRepresentation": z.boolean() }).optional() }).shape