import { z } from "zod"

export const toolName = `actions_enable_selected_repository_github_actions_organization`
export const toolDescription = `Enable a selected repository for GitHub Actions in an organization`
export const baseUrl = `https://github.com`
export const path = `/orgs/{org}/actions/permissions/repositories/{repository_id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive."), "repository_id": z.number().int().describe("The unique identifier of the repository.") }).optional() }).shape