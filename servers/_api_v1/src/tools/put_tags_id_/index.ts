import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_tags_id_",
  "toolDescription": "Update a tag",
  "baseUrl": "/api/v1",
  "path": "/tags/{id}",
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
      "createdAt": "createdAt",
      "updatedAt": "updatedAt"
    }
  },
  inputParamsSchema
}

export default tool