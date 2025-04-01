import { z } from "zod"

export const toolName = `get_admin_realms_realm_authentication_form_action_providers`
export const toolDescription = `Get form action providers Returns a stream of form action providers.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/form-action-providers`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape