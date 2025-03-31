import { z } from "zod"

export const toolName = `parameters_admin_realms_realm_client_scopes`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-scopes`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape