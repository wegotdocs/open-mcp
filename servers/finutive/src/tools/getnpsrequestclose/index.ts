import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnpsrequestclose",
  "toolDescription": "Get NPS request close status",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/nps/close",
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
      "service_id": "service_id"
    }
  },
  inputParamsSchema
}

export default tool