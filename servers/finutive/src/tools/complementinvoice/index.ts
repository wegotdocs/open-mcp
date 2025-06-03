import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "complementinvoice",
  "toolDescription": "Complement invoice",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/invoices/{invoice_id}/complement",
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
      "invoice_id": "invoice_id"
    }
  },
  inputParamsSchema
}

export default tool