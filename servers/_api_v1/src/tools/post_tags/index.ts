import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_tags",
  "toolDescription": "Create a tag",
  "baseUrl": "/api/v1",
  "path": "/tags",
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
      "createdAt": "createdAt",
      "updatedAt": "updatedAt"
    }
  },
  inputParamsSchema
}

export default tool