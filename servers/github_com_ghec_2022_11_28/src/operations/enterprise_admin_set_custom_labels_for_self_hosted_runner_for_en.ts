import { z } from "zod"

export const toolName = `enterprise_admin_set_custom_labels_for_self_hosted_runner_for_en`
export const toolDescription = `Set custom labels for a self-hosted runner for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/runners/{runner_id}/labels`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.") }).optional(), "body": z.object({ "labels": z.array(z.string()).min(0).max(100).describe("The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.") }).optional() }).shape