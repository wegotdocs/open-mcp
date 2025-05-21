import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "read_api_v1_role_role_id_get",
  "toolDescription": "Read",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/role/{role_id}",
  "method": "get",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {
    "path": {
      "role_id": "role_id"
    }
  },
  inputParamsSchema
}

export default tool