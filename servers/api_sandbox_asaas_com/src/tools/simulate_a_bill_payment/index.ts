import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "simulate_a_bill_payment",
  "toolDescription": "Simulate a bill payment",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/bill/simulate",
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
    "body": {
      "identificationField": "identificationField",
      "barCode": "barCode"
    }
  },
  inputParamsSchema
}

export default tool