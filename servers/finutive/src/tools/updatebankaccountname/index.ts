import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatebankaccountname",
  "toolDescription": "Update bank account name",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/banks/accounts/{account_id}/name",
  "method": "put",
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
      "name": "name",
      "id": "id",
      "cuenta_impuestos_por_defecto": "cuenta_impuestos_por_defecto",
      "default_invoice_account": "default_invoice_account"
    }
  },
  inputParamsSchema
}

export default tool