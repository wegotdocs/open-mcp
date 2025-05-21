import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trunk_read_api_v1_trunk_get",
  "toolDescription": "Trunk Read",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/trunk/",
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
    "query": {
      "trunk": "trunk"
    }
  },
  inputParamsSchema
}

export default tool