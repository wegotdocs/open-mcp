import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_get_pdfbyuuid",
  "toolDescription": "Retrieve an Invoice PDF by UUID",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/customers/my/invoices/{invoice_uuid}/pdf",
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
      "invoice_uuid": "invoice_uuid"
    }
  },
  inputParamsSchema
}

export default tool