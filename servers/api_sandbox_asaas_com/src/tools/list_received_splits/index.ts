import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_received_splits",
  "toolDescription": "List received splits",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/payments/splits/received",
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
      "paymentId": "paymentId",
      "status": "status",
      "paymentConfirmedDate[ge]": "paymentConfirmedDate[ge]",
      "paymentConfirmedDate[le]": "paymentConfirmedDate[le]",
      "creditDate[ge]": "creditDate[ge]",
      "creditDate[le]": "creditDate[le]"
    }
  },
  inputParamsSchema
}

export default tool