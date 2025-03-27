import { z } from "zod"

export const toolName = `enterprise_admin_delete_public_key`
export const toolDescription = `Delete a public key`
export const baseUrl = `https://github.com`
export const path = `/admin/keys/{key_ids}`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "key_ids": z.string().describe("The unique identifier of the key.") }).optional() }).shape