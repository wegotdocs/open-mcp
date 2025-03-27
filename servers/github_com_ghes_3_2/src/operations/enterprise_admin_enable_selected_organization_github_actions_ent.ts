import { z } from "zod"

export const toolName = `enterprise_admin_enable_selected_organization_github_actions_ent`
export const toolDescription = `Enable a selected organization for GitHub Actions in an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/permissions/organizations/{org_id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "org_id": z.number().int().describe("The unique identifier of the organization.") }).optional() }).shape