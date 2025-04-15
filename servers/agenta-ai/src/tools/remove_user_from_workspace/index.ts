import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_user_from_workspace",
  "toolDescription": "Remove User From Workspace",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/workspaces/{workspace_id}/users",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "workspace_id": "workspace_id"
    },
    "query": {
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool