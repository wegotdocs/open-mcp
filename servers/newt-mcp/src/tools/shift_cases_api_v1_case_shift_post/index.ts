import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "shift_cases_api_v1_case_shift_post",
  "toolDescription": "Shift Cases",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/case/shift",
  "method": "post",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    },
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {
    "body": {
      "cases": "cases",
      "queue": "queue"
    }
  },
  inputParamsSchema
}

export default tool