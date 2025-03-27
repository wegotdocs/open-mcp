import { z } from "zod"

export const toolName = `actions_get_github_actions_default_workflow_permissions_enterpri`
export const toolDescription = `Get default workflow permissions for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/permissions/workflow`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional() }).shape