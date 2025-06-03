import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reloadallinvoicesfromupdatedat",
  "toolDescription": "Recarga todas las facturas a partir del updated_at",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/scripts/reload_all_invoices_from_updated_at",
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
      "pageSize": "pageSize",
      "updatedAt": "updatedAt"
    }
  },
  inputParamsSchema
}

export default tool