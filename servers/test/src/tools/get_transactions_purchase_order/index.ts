import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_transactions_purchase_order",
  "toolDescription": "რეალიზაციის თემფლეითები",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/transactions/get-saved-realization-orders",
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
      "language": "language"
    },
    "query": {
      "id": "id",
      "organization_id": "organization_id",
      "name": "name",
      "product_amount": "product_amount",
      "object_id": "object_id",
      "from_account_id": "from_account_id",
      "transaction_type": "transaction_type",
      "vat": "vat",
      "course": "course",
      "currency": "currency",
      "products": "products",
      "page_size": "page_size",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool