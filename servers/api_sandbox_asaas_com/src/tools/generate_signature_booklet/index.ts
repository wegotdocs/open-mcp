import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_signature_booklet",
  "toolDescription": "Generate subscription booklet",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/subscriptions/{id}/paymentBook",
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
      "month": "month",
      "year": "year",
      "sort": "sort",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool