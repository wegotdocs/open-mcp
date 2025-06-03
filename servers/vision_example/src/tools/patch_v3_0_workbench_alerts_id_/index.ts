import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_workbench_alerts_id_",
  "toolDescription": "Modify alert status",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/workbench/alerts/{id}",
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
      "id": "id"
    },
    "body": {
      "status": "status",
      "investigationResult": "investigationResult"
    },
    "header": {
      "If-Match": "If-Match"
    }
  },
  inputParamsSchema
}

export default tool