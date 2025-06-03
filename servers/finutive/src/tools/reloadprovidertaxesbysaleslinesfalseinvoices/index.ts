import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reloadprovidertaxesbysaleslinesfalseinvoices",
  "toolDescription": "Recarga las facturas de proveedores que tengan las líneas de venta mal generadas",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/scripts/reload_provider_invoices_and_taxes_by_sales_lines_false",
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