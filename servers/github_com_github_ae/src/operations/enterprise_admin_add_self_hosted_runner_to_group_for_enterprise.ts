import { z } from "zod"

export const toolName = `enterprise_admin_add_self_hosted_runner_to_group_for_enterprise`
export const toolDescription = `Add a self-hosted runner to a group for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."), "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.") }).optional() }).shape