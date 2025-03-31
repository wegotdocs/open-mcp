import { z } from "zod"

export const toolName = `delete_admin_realms_realm_admin_events`
export const toolDescription = `Delete all admin events`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/admin-events`
export const method = `delete`
export const security = []

export const inputParams = z.object({}).shape