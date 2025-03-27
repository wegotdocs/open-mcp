import { z } from "zod"

export const toolName = `enterprise_admin_create_self_hosted_runner_group_for_enterprise`
export const toolDescription = `Create a self-hosted runner group for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/runner-groups`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "body": z.object({ "allows_public_repositories": z.boolean().describe("Whether the runner group can be used by `public` repositories."), "name": z.string().describe("Name of the runner group."), "runners": z.array(z.number().int().describe("Unique identifier of the runner.")).describe("List of runner IDs to add to the runner group.").optional(), "selected_organization_ids": z.array(z.number().int().describe("Unique identifier of the organization.")).describe("List of organization IDs that can access the runner group.").optional(), "visibility": z.enum(["selected","all"]).describe("Visibility of a runner group. You can select all organizations or select individual organization.").optional() }).optional() }).shape