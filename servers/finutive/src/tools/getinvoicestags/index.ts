import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinvoicestags",
  "toolDescription": "Get all invoice tags",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/tags",
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
      "businessId": "businessId"
    },
    "query": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool