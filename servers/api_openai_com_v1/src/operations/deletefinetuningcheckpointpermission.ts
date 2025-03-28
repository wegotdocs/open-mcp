import { z } from "zod"

export const toolName = `deletefinetuningcheckpointpermission`
export const toolDescription = `**NOTE:** This endpoint requires an [admin API key](../admin-api-keys).

Organization owners can use this endpoint to delete a permission for a fine-tuned model checkpoint.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/fine_tuning/checkpoints/{permission_id}/permissions`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "permission_id": z.string().describe("The ID of the fine-tuned model checkpoint permission to delete.\n") }).optional() }).shape