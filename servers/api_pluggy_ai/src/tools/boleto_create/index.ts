import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "boleto_create",
  "toolDescription": "Issue Boleto",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/boletos",
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
      "boletoConnectionId": "boletoConnectionId",
      "boleto": "boleto"
    }
  },
  inputParamsSchema
}

export default tool