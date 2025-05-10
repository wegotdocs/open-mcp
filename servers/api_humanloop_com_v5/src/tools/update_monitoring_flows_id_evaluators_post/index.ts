import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_monitoring_flows_id_evaluators_post",
  "toolDescription": "Update Monitoring",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/flows/{id}/evaluators",
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
      "id": "id"
    },
    "body": {
      "activate": "activate",
      "deactivate": "deactivate"
    }
  },
  inputParamsSchema
}

export default tool