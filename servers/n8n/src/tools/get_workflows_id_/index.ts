import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_workflows_id_",
  "toolDescription": "Retrieves a workflow",
  "baseUrl": "/api/v1",
  "path": "/workflows/{id}",
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
      "excludePinnedData": "excludePinnedData"
    }
  },
  inputParamsSchema
}

export default tool