import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_payments_available_for_payment_dunning",
  "toolDescription": "List payments available for payment dunning",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/paymentDunnings/paymentsAvailableForDunning",
  "method": "get",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "offset": "offset",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool