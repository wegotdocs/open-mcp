import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_extract",
  "toolDescription": "Retrieve extract",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/financialTransactions",
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
      "startDate": "startDate",
      "finishDate": "finishDate",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool