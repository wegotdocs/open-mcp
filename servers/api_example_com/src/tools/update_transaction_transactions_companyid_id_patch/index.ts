import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_transaction_transactions_companyid_id_patch",
  "toolDescription": "Update transaction",
  "baseUrl": "https://api.example.com",
  "path": "/transactions/{companyId}/{id}",
  "method": "patch",
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
      "id": "id",
      "companyId": "companyId"
    },
    "body": {
      "additionalInfo": "additionalInfo",
      "attributes": "attributes",
      "sync": "sync"
    }
  },
  inputParamsSchema
}

export default tool