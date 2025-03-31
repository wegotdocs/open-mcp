import { z } from "zod"

export const toolName = `put_admin_realms_realm_client_scopes_client_scope_id_`
export const toolDescription = `Update the client scope`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-scopes/{client-scope-id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "id": z.string().optional(), "name": z.string().optional(), "description": z.string().optional(), "protocol": z.string().optional(), "attributes": z.record(z.string()).optional(), "protocolMappers": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "protocol": z.string().optional(), "protocolMapper": z.string().optional(), "config": z.record(z.string()).optional() })).optional() }).optional() }).shape