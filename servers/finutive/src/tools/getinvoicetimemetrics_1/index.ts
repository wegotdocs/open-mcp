import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinvoicetimemetrics_1",
  "toolDescription": "Get invoice time metrics",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/instance/time_metrics",
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
    "query": {
      "request": "request"
    }
  },
  inputParamsSchema
}

export default tool