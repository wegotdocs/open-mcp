import { z } from "zod"

export const toolName = `enterprise_admin_list_self_hosted_runners_in_group_for_enterpris`
export const toolDescription = `List self-hosted runners in a group for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group.") }).optional(), "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape