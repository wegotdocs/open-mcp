import { z } from "zod"

export const toolName = `get_admin_realms_realm_`
export const toolDescription = `Get the top-level representation of the realm It will not include nested information like User and Client representations.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape