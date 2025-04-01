import { z } from "zod"

export const toolName = `delete_admin_realms_realm_`
export const toolDescription = `Delete the realm`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}`
export const method = `delete`
export const security = []

export const inputParams = z.object({}).shape