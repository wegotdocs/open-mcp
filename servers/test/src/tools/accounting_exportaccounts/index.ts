import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accounting_exportaccounts",
  "toolDescription": "ანგარიშების ექსპორტი",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/accounting-accounts/export",
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
      "account_number": "account_number",
      "account_name": "account_name",
      "parent_account_number": "parent_account_number",
      "account_key": "account_key",
      "parent_id": "parent_id",
      "id": "id",
      "ids": "ids",
      "mixed": "mixed",
      "amount_from": "amount_from",
      "amount_to": "amount_to",
      "search": "search",
      "barcode": "barcode",
      "group_id": "group_id",
      "service_organization_identification": "service_organization_identification",
      "type": "type",
      "currency": "currency",
      "country": "country"
    }
  },
  inputParamsSchema
}

export default tool