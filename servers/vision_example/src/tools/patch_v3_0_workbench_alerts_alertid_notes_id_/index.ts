import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_workbench_alerts_alertid_notes_id_",
  "toolDescription": "Edit alert note",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/workbench/alerts/{alertId}/notes/{id}",
  "method": "patch",
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
      "alertId": "alertId",
      "id": "id"
    },
    "body": {
      "content": "content"
    },
    "header": {
      "If-Match": "If-Match"
    }
  },
  inputParamsSchema
}

export default tool