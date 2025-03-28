import { z } from "zod"

export const toolName = `listfinetuningcheckpointpermissions`
export const toolDescription = `**NOTE:** This endpoint requires an [admin API key](../admin-api-keys).

Organization owners can use this endpoint to view all permissions for a fine-tuned model checkpoint.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/fine_tuning/checkpoints/{permission_id}/permissions`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "permission_id": z.string().describe("The ID of the fine-tuned model checkpoint to get permissions for.\n") }).optional(), "query": z.object({ "project_id": z.string().describe("The ID of the project to get permissions for.").optional(), "after": z.string().describe("Identifier for the last permission ID from the previous pagination request.").optional(), "limit": z.number().int().describe("Number of permissions to retrieve."), "order": z.enum(["ascending","descending"]).describe("The order in which to retrieve permissions.") }).optional() }).shape