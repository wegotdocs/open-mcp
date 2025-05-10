import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettopprotocolfees",
  "toolDescription": "Get the protocols that have earned the most fees.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/top_protocol_fees",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "num_protocols": "num_protocols",
      "time_period": "time_period",
      "chain": "chain",
      "category": "category"
    }
  },
  inputParamsSchema
}

export default tool