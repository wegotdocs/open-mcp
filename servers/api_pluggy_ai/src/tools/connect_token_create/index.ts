import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "connect_token_create",
  "toolDescription": "Create Connect Token",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/connect_token",
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
      "itemId": "itemId",
      "options": "options"
    }
  },
  inputParamsSchema
}

export default tool