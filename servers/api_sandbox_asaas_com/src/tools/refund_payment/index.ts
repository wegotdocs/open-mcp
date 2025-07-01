import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refund_payment",
  "toolDescription": "Refund payment",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/payments/{id}/refund",
  "method": "post",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "value": "value",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool