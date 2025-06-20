import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_users_id_role",
  "toolDescription": "Change a user's global role",
  "baseUrl": "https://mcp.open-mcp.org/api",
  "path": "/users/{id}/role",
  "method": "patch",
  "security": [
    {
      "key": "X-N8N-API-KEY",
      "value": "<mcp-env-var>X_N8N_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_N8N_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "newRoleName": "newRoleName"
    }
  },
  inputParamsSchema
}

export default tool