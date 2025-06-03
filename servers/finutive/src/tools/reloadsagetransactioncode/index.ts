import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reloadsagetransactioncode",
  "toolDescription": "Recarga el código de transacción de Sage",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/scripts/reload_sage_transaction_code",
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
    "body": {
      "invoiceIds": "invoiceIds",
      "page": "page",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool