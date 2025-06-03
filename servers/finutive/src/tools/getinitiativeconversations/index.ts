import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinitiativeconversations",
  "toolDescription": "Get business conversations",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/communications/conversations",
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
      "pageable": "pageable",
      "responsible": "responsible",
      "service": "service",
      "status": "status",
      "saved": "saved",
      "element_type": "element_type",
      "element_id": "element_id"
    }
  },
  inputParamsSchema
}

export default tool