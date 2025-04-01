import { z } from "zod"

export const toolName = `get_admin_realms_realm_authentication_flows`
export const toolDescription = `Get authentication flows Returns a stream of authentication flows.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape