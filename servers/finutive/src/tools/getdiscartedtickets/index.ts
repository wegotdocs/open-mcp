import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdiscartedtickets",
  "toolDescription": "Get discarted tickets by url id",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/discard",
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
      "request": "request"
    }
  },
  inputParamsSchema
}

export default tool