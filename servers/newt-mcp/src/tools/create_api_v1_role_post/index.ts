import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_api_v1_role_post",
  "toolDescription": "Create",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/role",
  "method": "post",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {
    "body": {
      "created": "created",
      "description": "description",
      "id": "id",
      "name": "name",
      "updated": "updated"
    }
  },
  inputParamsSchema
}

export default tool