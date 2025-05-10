import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprotocolrevenue",
  "toolDescription": "Get the revenue earned by a protocol",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_protocol_revenue",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "defillamaId": "defillamaId",
      "time_period": "time_period"
    }
  },
  inputParamsSchema
}

export default tool