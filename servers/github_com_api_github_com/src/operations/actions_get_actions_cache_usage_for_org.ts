import { z } from "zod"

export const toolName = `actions_get_actions_cache_usage_for_org`
export const toolDescription = `Get GitHub Actions cache usage for an organization`
export const baseUrl = `https://api.github.com`
export const path = `/orgs/{org}/actions/cache/usage`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional() }).shape