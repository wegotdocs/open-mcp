import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payment_intent_create",
  "toolDescription": "Create",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/payments/intents",
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
      "paymentRequestId": "paymentRequestId",
      "parameters": "parameters",
      "connectorId": "connectorId",
      "paymentMethod": "paymentMethod",
      "isDynamicPix": "isDynamicPix"
    }
  },
  inputParamsSchema
}

export default tool