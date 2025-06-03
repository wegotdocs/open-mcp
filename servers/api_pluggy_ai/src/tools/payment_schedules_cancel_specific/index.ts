import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payment_schedules_cancel_specific",
  "toolDescription": "Cancel Payment Schedule",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/payments/requests/{id}/schedules/{scheduleId}/cancel",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "scheduleId": "scheduleId"
    }
  },
  inputParamsSchema
}

export default tool