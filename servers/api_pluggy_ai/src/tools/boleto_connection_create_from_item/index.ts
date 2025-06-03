import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "boleto_connection_create_from_item",
  "toolDescription": "Create boleto connection from Item",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/boleto-connections/from-item",
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
      "itemId": "itemId"
    }
  },
  inputParamsSchema
}

export default tool