import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_api_v1_role_role_id_patch",
  "toolDescription": "Update",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/role/{role_id}",
  "method": "patch",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {
    "query": {
      "username": "username"
    },
    "body": {
      "description": "description",
      "name": "name",
      "users": "users",
      "scopes": "scopes"
    }
  },
  inputParamsSchema
}

export default tool