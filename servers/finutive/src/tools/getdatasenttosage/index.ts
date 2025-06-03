import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdatasenttosage",
  "toolDescription": "Get data sent to Sage",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses/{businessId}/invoices/{invoice_id}/sage",
  "method": "get",
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
      "businessId": "businessId",
      "invoice_id": "invoice_id"
    }
  },
  inputParamsSchema
}

export default tool