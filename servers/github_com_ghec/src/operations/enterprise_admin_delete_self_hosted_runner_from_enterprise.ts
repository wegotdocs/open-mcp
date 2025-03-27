import { z } from "zod"

export const toolName = `enterprise_admin_delete_self_hosted_runner_from_enterprise`
export const toolDescription = `Delete a self-hosted runner from an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/runners/{runner_id}`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.") }).optional() }).shape