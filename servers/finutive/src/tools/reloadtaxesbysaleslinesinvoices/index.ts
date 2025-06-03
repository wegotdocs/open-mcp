import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reloadtaxesbysaleslinesinvoices",
  "toolDescription": "Recarga las facturas que tengan las líneas de venta mal generadas",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/scripts/reload_invoices_taxes_by_sales_lines_true",
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