import { z } from "zod"

export const toolName = `actions_update_required_workflow`
export const toolDescription = `Update a required workflow`
export const baseUrl = `https://github.com`
export const path = `/orgs/{org}/actions/required_workflows/{required_workflow_id}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive."), "required_workflow_id": z.number().int().describe("The unique identifier of the required workflow.") }).optional(), "body": z.object({ "repository_id": z.string().describe("The ID of the repository that contains the workflow file.").optional(), "scope": z.enum(["selected","all"]).describe("Enable the required workflow for all repositories or selected repositories in the organization."), "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("A list of repository IDs where you want to enable the required workflow. A list of repository IDs where you want to enable the required workflow. You can only provide a list of repository ids when the `scope` is set to `selected`.").optional(), "workflow_file_path": z.string().describe("Path of the workflow file to be configured as a required workflow.").optional() }).optional() }).shape