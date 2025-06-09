import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "operations_createtransactionpurchaseorder",
  "toolDescription": "პროდუქტის შეძენა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/transactions/create-purchase-order",
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
      "from_account_id": "from_account_id",
      "transaction_type": "transaction_type",
      "date": "date",
      "document": "document",
      "vat": "vat",
      "course": "course",
      "currency": "currency",
      "object_id": "object_id",
      "payment": "payment",
      "products": "products"
    }
  },
  inputParamsSchema
}

export default tool