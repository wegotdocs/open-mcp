import { z } from "zod"

export const toolName = `apps_list_accounts_for_plan`
export const toolDescription = `List accounts for a plan`
export const baseUrl = `https://github.com`
export const path = `/marketplace_listing/plans/{plan_id}/accounts`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "plan_id": z.number().int().describe("The unique identifier of the plan.") }).optional(), "query": z.object({ "sort": z.enum(["created","updated"]).describe("The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to."), "direction": z.enum(["asc","desc"]).describe("To return the oldest accounts first, set to `asc`. Ignored without the `sort` parameter.").optional(), "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape