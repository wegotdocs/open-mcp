import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "boleto_connection_create",
  "toolDescription": "Connect boleto credentials",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/boleto-connections",
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
      "connectorId": "connectorId",
      "credentials": "credentials"
    }
  },
  inputParamsSchema
}

export default tool