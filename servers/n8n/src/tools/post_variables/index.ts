import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_variables",
  "toolDescription": "Create a variable",
  "baseUrl": "https://mcp.open-mcp.org/api",
  "path": "/variables",
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
      "key": "key",
      "value": "value",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool