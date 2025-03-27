import { z } from "zod"

export const toolName = `actions_add_selected_repo_to_required_workflow`
export const toolDescription = `Add a repository to a required workflow`
export const baseUrl = `https://github.com`
export const path = `/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive."), "required_workflow_id": z.number().int().describe("The unique identifier of the required workflow."), "repository_id": z.number().int().describe("The unique identifier of the repository.") }).optional() }).shape