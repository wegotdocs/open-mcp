import { z } from "zod"

export const toolName = `enterprise_admin_create_remove_token_for_enterprise`
export const toolDescription = `Create a remove token for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/runners/remove-token`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional() }).shape