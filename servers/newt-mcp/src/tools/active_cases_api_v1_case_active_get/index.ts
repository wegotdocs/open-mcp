import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "active_cases_api_v1_case_active_get",
  "toolDescription": "Active Cases",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/case/active",
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
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool