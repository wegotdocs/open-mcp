import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_manual_transactions_bulk_transactions_companyid_productid",
  "toolDescription": "Create manual transactions bulk",
  "baseUrl": "https://api.example.com",
  "path": "/transactions/{companyId}/{productId}/bulk",
  "method": "post",
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
      "companyId": "companyId",
      "productId": "productId"
    },
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool