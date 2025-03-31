import { z } from "zod"

export const toolName = `get_admin_realms_realm_authentication_unregistered_required_acti`
export const toolDescription = `Get unregistered required actions Returns a stream of unregistered required actions.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/unregistered-required-actions`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape