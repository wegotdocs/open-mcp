import { z } from "zod"

export const toolName = `enterprise_admin_get_global_webhook`
export const toolDescription = `Get a global webhook`
export const baseUrl = `https://github.com`
export const path = `/admin/hooks/{hook_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "header": z.object({ "accept": z.string().describe("This API is under preview and subject to change.") }).optional(), "path": z.object({ "hook_id": z.number().int().describe("The unique identifier of the hook.") }).optional() }).shape