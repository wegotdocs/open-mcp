import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_logs_evaluations_id_logs_get",
  "toolDescription": "Get Logs for Evaluation",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/evaluations/{id}/logs",
  "method": "get",
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
    "query": {
      "page": "page",
      "size": "size",
      "run_id": "run_id"
    }
  },
  inputParamsSchema
}

export default tool