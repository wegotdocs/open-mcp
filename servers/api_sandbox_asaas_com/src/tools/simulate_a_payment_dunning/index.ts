import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "simulate_a_payment_dunning",
  "toolDescription": "Simulate a payment dunning",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/paymentDunnings/simulate",
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
    "query": {
      "payment": "payment"
    }
  },
  inputParamsSchema
}

export default tool