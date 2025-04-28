import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettopshrinkers",
  "toolDescription": "Get the protocols that had the highest percentage loss in terms of TVl.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/top_shrinkers/{num_protocols}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "num_protocols": "num_protocols"
    },
    "query": {
      "min_tvl": "min_tvl",
      "time_period": "time_period",
      "category": "category",
      "chain": "chain"
    }
  },
  inputParamsSchema
}

export default tool