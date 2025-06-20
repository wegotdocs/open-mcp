import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_executions_id_",
  "toolDescription": "Retrieve an execution",
  "baseUrl": "https://mcp.open-mcp.org/api",
  "path": "/executions/{id}",
  "method": "get",
  "security": [
    {
      "key": "X-N8N-API-KEY",
      "value": "<mcp-env-var>X_N8N_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_N8N_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "includeData": "includeData"
    }
  },
  inputParamsSchema
}

export default tool