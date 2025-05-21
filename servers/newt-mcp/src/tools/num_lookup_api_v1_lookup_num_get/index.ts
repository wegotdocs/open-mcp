import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "num_lookup_api_v1_lookup_num_get",
  "toolDescription": "Num Lookup",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/lookup/num",
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
      "count": "count",
      "did": "did",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool