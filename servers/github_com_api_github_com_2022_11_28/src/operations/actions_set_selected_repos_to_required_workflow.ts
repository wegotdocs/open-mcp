import { z } from "zod"

export const toolName = `actions_set_selected_repos_to_required_workflow`
export const toolDescription = `Sets repositories for a required workflow`
export const baseUrl = `https://github.com`
export const path = `/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive."), "required_workflow_id": z.number().int().describe("The unique identifier of the required workflow.") }).optional(), "body": z.object({ "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("The IDs of the repositories for which the workflow should be required.") }).optional() }).shape