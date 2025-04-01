import { z } from "zod"

export const toolName = `post_admin_realms_realm_authentication_register_required_action`
export const toolDescription = `Register a new required actions`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/register-required-action`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.record(z.string()).optional() }).shape