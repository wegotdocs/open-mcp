import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getadminlaboralflows",
  "toolDescription": "Get admin labor flows",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/laboral/flows",
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
      "size": "size",
      "offset": "offset",
      "flow": "flow",
      "search": "search",
      "step": "step",
      "responsible": "responsible",
      "business_responsible": "business_responsible",
      "start_date": "start_date",
      "end_date": "end_date",
      "status": "status",
      "date_type": "date_type",
      "business": "business"
    }
  },
  inputParamsSchema
}

export default tool