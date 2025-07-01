import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_installment_booklet",
  "toolDescription": "Generate installment booklet",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/installments/{id}/paymentBook",
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
      "sort": "sort",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool