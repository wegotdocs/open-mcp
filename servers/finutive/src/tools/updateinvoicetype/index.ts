import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateinvoicetype",
  "toolDescription": "update invoice type",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/documents/update_invoice_type",
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
    "query": {
      "id_edit": "id_edit",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool