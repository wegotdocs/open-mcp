import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reverse_transactions_purchase_order",
  "toolDescription": "პროდუქტის შეძენის რევერსი",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/transactions/reverse-purchase-order",
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
      "language": "language"
    },
    "body": {
      "operation_id": "operation_id",
      "transaction_ids": "transaction_ids"
    }
  },
  inputParamsSchema
}

export default tool