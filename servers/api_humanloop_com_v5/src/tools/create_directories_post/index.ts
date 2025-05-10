import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_directories_post",
  "toolDescription": "Create",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/directories",
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
    "body": {
      "name": "name",
      "parent_id": "parent_id",
      "path": "path"
    }
  },
  inputParamsSchema
}

export default tool