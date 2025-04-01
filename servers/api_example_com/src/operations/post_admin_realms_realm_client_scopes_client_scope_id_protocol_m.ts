import { z } from "zod"

export const toolName = `post_admin_realms_realm_client_scopes_client_scope_id_protocol_m`
export const toolDescription = `Create multiple mappers`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/add-models`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "protocol": z.string().optional(), "protocolMapper": z.string().optional(), "config": z.record(z.string()).optional() })).optional() }).shape