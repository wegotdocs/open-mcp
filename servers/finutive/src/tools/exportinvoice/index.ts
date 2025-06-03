import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportinvoice",
  "toolDescription": "export invoice",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/{type}/export/{export_type}",
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
      "businessId": "businessId",
      "type": "type",
      "export_type": "export_type"
    },
    "body": {
      "ids": "ids"
    }
  },
  inputParamsSchema
}

export default tool