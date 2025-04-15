import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_logs_exports",
  "toolDescription": "Create log export",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/logs/exports",
  "method": "post",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "workspace_id": "workspace_id",
      "filters": "filters",
      "requested_data": "requested_data"
    }
  },
  inputParamsSchema
}

export default tool