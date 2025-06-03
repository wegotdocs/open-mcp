import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdatebankaccount",
  "toolDescription": "Create or update bank account",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/banks/accounts",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "bank": "bank",
      "name": "name",
      "iban": "iban",
      "bank_name": "bank_name",
      "user": "user",
      "password": "password",
      "id": "id",
      "cuenta_impuestos_por_defecto": "cuenta_impuestos_por_defecto",
      "default_invoice_account": "default_invoice_account"
    }
  },
  inputParamsSchema
}

export default tool