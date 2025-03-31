import { z } from "zod"

export const toolName = `get_admin_realms_realm_client_scopes`
export const toolDescription = `Get client scopes belonging to the realm Returns a list of client scopes belonging to the realm`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-scopes`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape