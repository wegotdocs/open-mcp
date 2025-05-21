import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "case_summary_api_v1_case_summary_get",
  "toolDescription": "Case Summary",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/case/summary",
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
      "case": "case"
    }
  },
  inputParamsSchema
}

export default tool