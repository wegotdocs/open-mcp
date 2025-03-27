import { z } from "zod"

export const toolName = `actions_set_selected_repositories_enabled_github_actions_organiz`
export const toolDescription = `Set selected repositories enabled for GitHub Actions in an organization`
export const baseUrl = `https://api.github.com`
export const path = `/orgs/{org}/actions/permissions/repositories`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional(), "body": z.object({ "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("List of repository IDs to enable for GitHub Actions.") }).optional() }).shape