import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfinetuningcheckpointpermission",
  "toolDescription": "**NOTE:** Calling this endpoint requires an [admin API key](../admin-api-keys).\n\nThis enables organization owners to share fine-tuned models with other projects in their organization.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/fine_tuning/checkpoints/{permission_id}/permissions",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "permission_id": "permission_id"
    },
    "body": {
      "project_ids": "project_ids"
    }
  },
  inputParamsSchema
}

export default tool