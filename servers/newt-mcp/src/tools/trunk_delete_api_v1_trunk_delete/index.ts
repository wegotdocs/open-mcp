import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trunk_delete_api_v1_trunk_delete",
  "toolDescription": "Trunk Delete",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/trunk/",
  "method": "delete",
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
      "trunk": "trunk"
    }
  },
  inputParamsSchema
}

export default tool