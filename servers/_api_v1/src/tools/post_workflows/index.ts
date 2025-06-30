import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_workflows",
  "toolDescription": "Create a workflow",
  "baseUrl": "/api/v1",
  "path": "/workflows",
  "method": "post",
  "security": [
    {
      "key": "X-N8N-API-KEY",
      "value": "<mcp-env-var>X_N8N_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_N8N_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
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