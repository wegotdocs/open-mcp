import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refund_transactions_purchase_order",
  "toolDescription": "",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/transactions/refund-realization-order",
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
      "extra_type": "extra_type",
      "operation_id": "operation_id",
      "driver_tin": "driver_tin",
      "driver_name": "driver_name",
      "car_number": "car_number",
      "start_address": "start_address",
      "end_address": "end_address",
      "transportation_cost": "transportation_cost",
      "organization_name": "organization_name",
      "tranCostPayer": "tranCostPayer",
      "name": "name",
      "from_account_id": "from_account_id",
      "date": "date",
      "document": "document",
      "vat": "vat",
      "course": "course",
      "currency": "currency",
      "object_id": "object_id",
      "products": "products"
    }
  },
  inputParamsSchema
}

export default tool