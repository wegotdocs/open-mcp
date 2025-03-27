import { z } from "zod"

export const toolName = `enterprise_admin_set_self_hosted_runners_in_group_for_enterprise`
export const toolDescription = `Set self-hosted runners in a group for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group.") }).optional(), "body": z.object({ "runners": z.array(z.number().int().describe("Unique identifier of the runner.")).describe("List of runner IDs to add to the runner group.") }).optional() }).shape