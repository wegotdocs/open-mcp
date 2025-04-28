import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettopchainlosers",
  "toolDescription": "Get the chains that have lost the most TVL.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/top_chain_losers",
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