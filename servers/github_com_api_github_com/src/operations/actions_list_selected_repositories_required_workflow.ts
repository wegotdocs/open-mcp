import { z } from "zod"

export const toolName = `actions_list_selected_repositories_required_workflow`
export const toolDescription = `List selected repositories for a required workflow`
export const baseUrl = `https://api.github.com`
export const path = `/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive."), "required_workflow_id": z.number().int().describe("The unique identifier of the required workflow.") }).optional() }).shape