import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletefinetuningcheckpointpermission",
  "toolDescription": "**NOTE:** This endpoint requires an [admin API key](../admin-api-keys).\n\nOrganization owners can use this endpoint to delete a permission for a fine-tuned model checkpoint.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/fine_tuning/checkpoints/{permission_id}/permissions",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool