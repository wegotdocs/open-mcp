import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_payment_dunnings",
  "toolDescription": "List payment dunnings",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/paymentDunnings",
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
      "limit": "limit",
      "status": "status",
      "type": "type",
      "payment": "payment",
      "requestStartDate": "requestStartDate",
      "requestEndDate": "requestEndDate"
    }
  },
  inputParamsSchema
}

export default tool