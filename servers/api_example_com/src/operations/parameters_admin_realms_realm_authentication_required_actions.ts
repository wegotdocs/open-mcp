import { z } from "zod"

export const toolName = `parameters_admin_realms_realm_authentication_required_actions`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/required-actions`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape