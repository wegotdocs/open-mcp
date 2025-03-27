import { z } from "zod"

export const toolName = `actions_get_actions_cache_usage_policy_for_enterprise`
export const toolDescription = `Get GitHub Actions cache usage policy for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/actions/cache/usage-policy`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional() }).shape