import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getlaboralflows",
  "toolDescription": "Get labor flows",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/laboral/flows",
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
      "business_id": "business_id"
    },
    "query": {
      "size": "size",
      "offset": "offset",
      "flow": "flow",
      "responsible": "responsible",
      "start_date": "start_date",
      "end_date": "end_date",
      "status": "status",
      "date_type": "date_type",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool