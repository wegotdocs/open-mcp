import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sales_simulator",
  "toolDescription": "Sales simulator",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/payments/simulate",
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
      "value": "value",
      "installmentCount": "installmentCount",
      "billingTypes": "billingTypes"
    }
  },
  inputParamsSchema
}

export default tool