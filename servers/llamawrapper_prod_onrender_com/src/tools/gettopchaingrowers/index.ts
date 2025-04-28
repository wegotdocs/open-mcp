import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettopchaingrowers",
  "toolDescription": "Get the chains that have the highest percentage growth in TVL",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/top_chain_growers",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "num_chains": "num_chains",
      "min_tvl": "min_tvl",
      "time_period": "time_period"
    }
  },
  inputParamsSchema
}

export default tool