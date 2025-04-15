import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_workspaces",
  "toolDescription": "Create Workspace",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/admin/workspaces",
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
      "name": "name",
      "description": "description",
      "defaults": "defaults",
      "users": "users"
    }
  },
  inputParamsSchema
}

export default tool