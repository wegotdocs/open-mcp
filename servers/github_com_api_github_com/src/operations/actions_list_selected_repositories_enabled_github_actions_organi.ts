import { z } from "zod"

export const toolName = `actions_list_selected_repositories_enabled_github_actions_organi`
export const toolDescription = `List selected repositories enabled for GitHub Actions in an organization`
export const baseUrl = `https://api.github.com`
export const path = `/orgs/{org}/actions/permissions/repositories`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional(), "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape