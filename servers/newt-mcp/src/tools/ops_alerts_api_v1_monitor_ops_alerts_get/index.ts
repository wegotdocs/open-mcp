import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ops_alerts_api_v1_monitor_ops_alerts_get",
  "toolDescription": "Ops Alerts",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/monitor/ops-alerts",
  "method": "get",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool