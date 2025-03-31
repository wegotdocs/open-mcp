import { z } from "zod"

export const toolName = `delete_admin_realms_realm_client_scopes_client_scope_id_`
export const toolDescription = `Delete the client scope`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-scopes/{client-scope-id}`
export const method = `delete`
export const security = []

export const inputParams = z.object({}).shape