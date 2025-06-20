import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_workflows_id_",
  "toolDescription": "Update a workflow",
  "baseUrl": "https://mcp.open-mcp.org/api",
  "path": "/workflows/{id}",
  "method": "put",
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
    "body": {
      "id": "b_id",
      "name": "name",
      "active": "active",
      "createdAt": "createdAt",
      "updatedAt": "updatedAt",
      "nodes": "nodes",
      "connections": "connections",
      "settings": "settings",
      "staticData": "staticData",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool