import { z } from "zod"

export const toolName = `get_admin_realms_realm_authentication_client_authenticator_provi`
export const toolDescription = `Get client authenticator providers Returns a stream of client authenticator providers.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/client-authenticator-providers`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape