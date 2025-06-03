import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_transactions_transactions_companyid_get",
  "toolDescription": "List transactions",
  "baseUrl": "https://api.example.com",
  "path": "/transactions/{companyId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "companyId": "companyId"
    },
    "query": {
      "productId": "productId",
      "sync": "sync",
      "startValueDate": "startValueDate",
      "endValueDate": "endValueDate",
      "startOperationDate": "startOperationDate",
      "endOperationDate": "endOperationDate",
      "startUpdatedAt": "startUpdatedAt",
      "endUpdatedAt": "endUpdatedAt",
      "limit": "limit",
      "nextPageToken": "nextPageToken"
    }
  },
  inputParamsSchema
}

export default tool