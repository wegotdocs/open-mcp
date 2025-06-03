import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_workbench_alerts_alertid_notes_delete",
  "toolDescription": "Delete alert notes",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/workbench/alerts/{alertId}/notes/delete",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "alertId": "alertId"
    }
  },
  inputParamsSchema
}

export default tool