import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_transactions",
  "toolDescription": "ტრანზაქციის გატარება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/transactions/create",
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
      "transaction_type": "transaction_type",
      "transaction_debet_id": "transaction_debet_id",
      "transaction_credit_id": "transaction_credit_id",
      "transaction_amount": "transaction_amount",
      "document": "document",
      "date": "date",
      "transaction_currency": "transaction_currency",
      "description": "description",
      "connection": "connection",
      "quantity": "quantity",
      "transaction_id": "transaction_id",
      "unit_id": "unit_id"
    }
  },
  inputParamsSchema
}

export default tool