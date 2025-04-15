import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_workspaces_workspaceid_",
  "toolDescription": "Update Workspace",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/admin/workspaces/{workspaceId}",
  "method": "put",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "workspaceId": "workspaceId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "defaults": "defaults"
    }
  },
  inputParamsSchema
}

export default tool