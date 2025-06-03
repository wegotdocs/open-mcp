import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_payments_payments_companyid_get",
  "toolDescription": "List payments",
  "baseUrl": "https://api.example.com",
  "path": "/payments/{companyId}",
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
      "registered": "registered",
      "startDate": "startDate",
      "endDate": "endDate",
      "startUpdatedAt": "startUpdatedAt",
      "endUpdatedAt": "endUpdatedAt",
      "internalAttributes": "internalAttributes",
      "limit": "limit",
      "nextPageToken": "nextPageToken"
    }
  },
  inputParamsSchema
}

export default tool