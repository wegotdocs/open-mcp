import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_workflows",
  "toolDescription": "Retrieve all workflows",
  "baseUrl": "/api/v1",
  "path": "/workflows",
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
    "query": {
      "active": "active",
      "tags": "tags",
      "name": "name",
      "projectId": "projectId",
      "excludePinnedData": "excludePinnedData",
      "limit": "limit",
      "cursor": "cursor"
    }
  },
  inputParamsSchema
}

export default tool