import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "clearinvoices",
  "toolDescription": "Borra los datos de las facturas mal procesadas",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/scripts/clear_invoices",
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