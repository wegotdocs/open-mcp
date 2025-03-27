import { z } from "zod"

export const toolName = `enterprise_admin_update_pre_receive_hook`
export const toolDescription = `Update a pre-receive hook`
export const baseUrl = `https://github.com`
export const path = `/admin/pre-receive-hooks/{pre_receive_hook_id}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "pre_receive_hook_id": z.number().int().describe("The unique identifier of the pre-receive hook.") }).optional(), "body": z.object({ "allow_downstream_configuration": z.boolean().describe("Whether enforcement can be overridden at the org or repo level.").optional(), "enforcement": z.string().describe("The state of enforcement for this hook.").optional(), "environment": z.object({}).catchall(z.any()).describe("The pre-receive environment where the script is executed.").optional(), "name": z.string().describe("The name of the hook.").optional(), "script": z.string().describe("The script that the hook runs.").optional(), "script_repository": z.object({}).catchall(z.any()).describe("The GitHub repository where the script is kept.").optional() }).optional() }).shape