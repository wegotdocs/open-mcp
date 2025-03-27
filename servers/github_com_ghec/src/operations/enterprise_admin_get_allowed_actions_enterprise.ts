import { z } from "zod"

export const toolName = `enterprise_admin_get_allowed_actions_enterprise`
export const toolDescription = `Get allowed actions and reusable workflows for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/permissions/selected-actions`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional() }).shape