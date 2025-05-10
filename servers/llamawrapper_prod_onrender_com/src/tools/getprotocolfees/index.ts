import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprotocolfees",
  "toolDescription": "Get the fees earned by a protocol",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_protocol_fees",
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