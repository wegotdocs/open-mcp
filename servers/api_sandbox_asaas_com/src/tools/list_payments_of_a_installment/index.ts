import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_payments_of_a_installment",
  "toolDescription": "List payments of a installment",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/installments/{id}/payments",
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
    "path": {
      "id": "id"
    },
    "query": {
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool