import { z } from "zod"

export const toolName = `createfinetuningcheckpointpermission`
export const toolDescription = `**NOTE:** Calling this endpoint requires an [admin API key](../admin-api-keys).

This enables organization owners to share fine-tuned models with other projects in their organization.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/fine_tuning/checkpoints/{permission_id}/permissions`
export const method = `post`
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

export const inputParams = z.object({ "path": z.object({ "permission_id": z.string().describe("The ID of the fine-tuned model checkpoint to create a permission for.\n") }).optional(), "body": z.object({ "project_ids": z.array(z.string()).describe("The project identifiers to grant access to.") }).strict().optional() }).shape