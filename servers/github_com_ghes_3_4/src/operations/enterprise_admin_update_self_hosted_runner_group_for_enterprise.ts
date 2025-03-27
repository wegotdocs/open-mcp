import { z } from "zod"

export const toolName = `enterprise_admin_update_self_hosted_runner_group_for_enterprise`
export const toolDescription = `Update a self-hosted runner group for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group.") }).optional(), "body": z.object({ "allows_public_repositories": z.boolean().describe("Whether the runner group can be used by `public` repositories."), "name": z.string().describe("Name of the runner group.").optional(), "visibility": z.enum(["selected","all"]).describe("Visibility of a runner group. You can select all organizations or select individual organizations.") }).optional() }).shape