import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "operations_index",
  "toolDescription": "ტრანზაქციების ჩამონათვალი",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/transactions/list",
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
      "asset": "asset",
      "date_from": "date_from",
      "date_to": "date_to",
      "organization_id": "organization_id",
      "document": "document",
      "debet_name": "debet_name",
      "credit_name": "credit_name",
      "debet_number": "debet_number",
      "credit_number": "credit_number",
      "object_id": "object_id",
      "unit_id": "unit_id",
      "unit_from": "unit_from",
      "unit_to": "unit_to",
      "amount": "amount",
      "amount_from": "amount_from",
      "amount_to": "amount_to",
      "currency": "currency",
      "description": "description",
      "quantity": "quantity",
      "quantity_from": "quantity_from",
      "quantity_to": "quantity_to",
      "course_from": "course_from",
      "course_to": "course_to",
      "operation_type": "operation_type",
      "transaction_type": "transaction_type",
      "page_size": "page_size",
      "page": "page",
      "operation_id": "operation_id",
      "waybillId": "waybillId",
      "waybill_number": "waybill_number",
      "parent_id": "parent_id",
      "is_active": "is_active",
      "vat": "vat",
      "account_id": "account_id",
      "connectable_account_id": "connectable_account_id",
      "with_start_transactions": "with_start_transactions",
      "card_account_id": "card_account_id",
      "account_ids": "account_ids",
      "connectable_account_ids": "connectable_account_ids"
    }
  },
  inputParamsSchema
}

export default tool