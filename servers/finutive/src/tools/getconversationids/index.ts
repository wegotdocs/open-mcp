import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getconversationids",
  "toolDescription": "Get conversations IDs",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/communications/conversations/ids",
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
      "business_id": "business_id",
      "responsible_id": "responsible_id",
      "service_id": "service_id",
      "status": "status",
      "saved": "saved",
      "proactive": "proactive",
      "element_type": "element_type",
      "element_id": "element_id",
      "start_date": "start_date",
      "end_date": "end_date"
    }
  },
  inputParamsSchema
}

export default tool