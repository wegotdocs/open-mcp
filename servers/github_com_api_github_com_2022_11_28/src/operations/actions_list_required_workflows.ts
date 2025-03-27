import { z } from "zod"

export const toolName = `actions_list_required_workflows`
export const toolDescription = `List required workflows`
export const baseUrl = `https://github.com`
export const path = `/orgs/{org}/actions/required_workflows`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional(), "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape